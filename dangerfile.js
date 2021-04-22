/* ⚠️
 * В этом файле можно импортить только из danger и стандартных библиотек ноды,
 * т.к. он выполняется через npx без установки всех пакетов
 * */
const { danger, fail, warn, markdown } = require('danger')

const isValidCommit = commit => {
  return commit.message.length > 10
}

const pr = danger.github.pr
const reviews = danger.github.reviews
const lastReview = reviews[reviews.length - 1]

const wasReviewed = reviews.length >= 2 && new Date(lastReview.submitted_at) < new Date(pr.updated_at)

markdown(`Задача в Jira: ${pr.head.ref}`)

if (pr.title.length < 10) {
  fail('Заголовок PR должен быть осмысленным (длиной не менее 10 символов)')
}

if (!pr.assignee) {
  const log = pr.draft ? warn : fail

  log('Должен быть указан автор PR и ревьюеры')
}

if (!danger.git.commits.every(isValidCommit)) {
  fail('Сообщения к коммитам должны быть осмысленными (длиной не менее 10 символов)')
}

if (wasReviewed && pr.updated_at !== pr.created_at) {
  warn('Если ведутся работы над PR, то нужно перевести его в draft')
  warn('Если были внесены изменения после ревью, то нужно запросить ре-ревью')
}
