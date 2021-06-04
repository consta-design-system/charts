import { StyleSheet } from '@antv/g2/lib/interface'
import { ThemeVars, useThemeVars } from '@consta/uikit/useThemeVars'

import { createThemeByStyleSheet } from '@/__private__/utils/theme/createThemeByStyleSheet'

const chartLineWidth = 1
const axisTickLineLength = chartLineWidth * 4

const getNumber = (str: string) => parseInt(str, 10)

export const getChartTheme = (vars: ThemeVars) => {
  const styleSheet: StyleSheet = {
    backgroundColor: 'transparent',
    brandColor: vars.color.primary['--color-typo-brand'],
    paletteQualitative10: [
      '#5B8FF9',
      '#5AD8A6',
      '#5D7092',
      '#F6BD16',
      '#6F5EF9',
      '#6DC8EC',
      '#945FB9',
      '#FF9845',
      '#1E9493',
      '#FF99C3',
    ],
    paletteQualitative20: [
      '#5B8FF9',
      '#CDDDFD',
      '#5AD8A6',
      '#CDF3E4',
      '#5D7092',
      '#CED4DE',
      '#F6BD16',
      '#FCEBB9',
      '#6F5EF9',
      '#D3CEFD',
      '#6DC8EC',
      '#D3EEF9',
      '#945FB9',
      '#DECFEA',
      '#FF9845',
      '#FFE0C7',
      '#1E9493',
      '#BBDEDE',
      '#FF99C3',
      '#FFE0ED',
    ],
    paletteSemanticRed: vars.color.primary['--color-typo-alert'],
    paletteSemanticGreen: vars.color.primary['--color-typo-success'],
    paletteSemanticYellow: vars.color.primary['--color-typo-warning'],
    fontFamily: vars.font['--font-primary'],
    axisLineBorderColor: vars.color.primary['--color-bg-system'],
    axisLineBorder: chartLineWidth,
    axisLineDash: [],
    axisTitleTextFillColor: '#ff00d0',
    axisTitleTextFontSize: getNumber(vars.size['--size-text-xs']),
    axisTitleTextLineHeight: getNumber(vars.size['--size-text-xs']),
    axisTitleTextFontWeight: 'normal',
    axisTitleSpacing: getNumber(vars.space['--space-s']),
    axisTickLineBorderColor: vars.color.primary['--color-bg-system'],
    axisTickLineLength,
    axisTickLineBorder: chartLineWidth,
    axisSubTickLineBorderColor: vars.color.primary['--color-bg-system'],
    axisSubTickLineLength: 2,
    axisSubTickLineBorder: chartLineWidth,
    axisLabelFillColor: vars.color.primary['--color-typo-secondary'],
    axisLabelFontSize: getNumber(vars.size['--size-text-2xs']),
    axisLabelLineHeight: getNumber(vars.size['--size-text-2xs']) * 1.2,
    axisLabelFontWeight: 'normal',
    axisLabelOffset: getNumber(vars.space['--space-2xs']),
    axisGridBorderColor: vars.color.primary['--color-bg-system'],
    axisGridBorder: chartLineWidth,
    axisGridLineDash: undefined,
    legendTitleTextFillColor: vars.color.primary['--color-typo-secondary'],
    legendTitleTextFontSize: getNumber(vars.size['--size-text-xs']),
    legendTitleTextLineHeight: getNumber(vars.size['--size-text-xs']) * 1.2,
    legendTitleTextFontWeight: 'normal',
    legendMarkerColor: vars.color.primary['--color-typo-brand'],
    legendMarkerSpacing: getNumber(vars.space['--space-xs']),
    legendMarkerSize: getNumber(vars.space['--space-2xs']),
    legendCircleMarkerSize: getNumber(vars.space['--space-2xs']),
    legendSquareMarkerSize: getNumber(vars.space['--space-2xs']),
    legendLineMarkerSize: 20,
    legendItemNameFillColor: vars.color.primary['--color-typo-primary'],
    legendItemNameFontSize: getNumber(vars.size['--size-text-xs']),
    legendItemNameLineHeight: getNumber(vars.size['--size-text-xs']),
    legendItemNameFontWeight: 'normal',
    legendItemSpacing: getNumber(vars.space['--space-xl']),
    legendItemMarginBottom: getNumber(vars.space['--space-s']),
    legendPadding: [
      getNumber(vars.space['--space-xs']),
      getNumber(vars.space['--space-xs']),
      getNumber(vars.space['--space-xs']),
      getNumber(vars.space['--space-xs']),
    ],
    legendHorizontalPadding: [
      getNumber(vars.space['--space-xs']),
      0,
      getNumber(vars.space['--space-xs']),
      0,
    ],
    legendVerticalPadding: [
      0,
      getNumber(vars.space['--space-xs']),
      0,
      getNumber(vars.space['--space-xs']),
    ],
    legendPageNavigatorMarkerSize: getNumber(vars.size['--size-text-xs']),
    legendPageNavigatorMarkerInactiveFillColor: vars.color.primary['--color-typo-primary'],
    legendPageNavigatorMarkerInactiveFillOpacity: 0.45,
    legendPageNavigatorMarkerFillColor: vars.color.primary['--color-typo-primary'],
    legendPageNavigatorMarkerFillOpacity: 1,
    legendPageNavigatorTextFillColor: vars.color.primary['--color-typo-secondary'],
    legendPageNavigatorTextFontSize: getNumber(vars.size['--size-text-xs']),
    sliderRailFillColor: vars.color.primary['--color-bg-system'],
    sliderRailBorder: 0,
    sliderRailBorderColor: 'transparent',
    sliderRailWidth: 100,
    sliderRailHeight: getNumber(vars.space['--space-s']),
    sliderLabelTextFillColor: vars.color.primary['--color-typo-secondary'],
    sliderLabelTextFontSize: getNumber(vars.size['--size-text-xs']),
    sliderLabelTextLineHeight: getNumber(vars.size['--size-text-xs']),
    sliderLabelTextFontWeight: 'normal',
    sliderHandlerFillColor: vars.color.primary['--color-scroll-bg'],
    sliderHandlerWidth: getNumber(vars.space['--space-xs']),
    sliderHandlerHeight: getNumber(vars.space['--space-s']),
    sliderHandlerBorder: chartLineWidth,
    sliderHandlerBorderColor: vars.color.primary['--color-bg-system'],
    annotationArcBorderColor: vars.color.primary['--color-bg-system'],
    annotationArcBorder: chartLineWidth,
    annotationLineBorderColor: vars.color.primary['--color-bg-system'],
    annotationLineBorder: chartLineWidth,
    annotationLineDash: [],
    annotationTextFillColor: vars.color.primary['--color-typo-primary'],
    annotationTextFontSize: getNumber(vars.size['--size-text-xs']),
    annotationTextLineHeight: getNumber(vars.size['--size-text-xs']),
    annotationTextFontWeight: 'normal',
    annotationTextBorderColor: 'transparent',
    annotationTextBorder: 0,
    annotationRegionFillColor: vars.color.primary['--color-typo-primary'],
    annotationRegionFillOpacity: 0.06,
    annotationRegionBorder: 0,
    annotationRegionBorderColor: 'transparent',
    annotationDataMarkerLineLength: getNumber(vars.space['--space-m']),
    tooltipCrosshairsBorderColor: vars.color.primary['--color-bg-border'],
    tooltipCrosshairsBorder: chartLineWidth,
    tooltipCrosshairsLineDash: [],
    tooltipContainerFillColor: vars.color.invert['--color-bg-default'],
    tooltipContainerFillOpacity: 1,
    // тень
    tooltipContainerShadow: '0px 0px 10px #aeaeae',
    tooltipContainerBorderRadius: getNumber(vars.control['--control-radius']),
    tooltipTextFillColor: vars.color.invert['--color-typo-primary'],
    tooltipTextFontSize: 12,
    tooltipTextLineHeight: 12,
    tooltipTextFontWeight: 'bold',
    labelFillColor: vars.color.primary['--color-typo-primary'],
    labelFillColorDark: vars.color.primary['--color-typo-primary'],
    labelFillColorLight: vars.color.primary['--color-typo-primary'],
    labelFontSize: getNumber(vars.size['--size-text-xs']),
    labelLineHeight: getNumber(vars.size['--size-text-xs']),
    labelFontWeight: 'normal',
    labelBorderColor: 'transparent',
    labelBorder: 0,
    innerLabelFillColor: vars.color.primary['--color-bg-default'],
    innerLabelFontSize: getNumber(vars.size['--size-text-xs']),
    innerLabelLineHeight: getNumber(vars.size['--size-text-xs']),
    innerLabelFontWeight: 'normal',
    innerLabelBorderColor: 'transparent',
    innerLabelBorder: 0,
    overflowLabelFillColor: vars.color.primary['--color-typo-primary'],
    overflowLabelFontSize: getNumber(vars.size['--size-text-xs']),
    overflowLabelLineHeight: getNumber(vars.size['--size-text-xs']),
    overflowLabelFontWeight: 'normal',
    overflowLabelBorderColor: vars.color.primary['--color-typo-primary'],
    overflowLabelBorder: chartLineWidth,
    labelLineBorder: chartLineWidth,
    labelLineBorderColor: vars.color.primary['--color-bg-system'],
    pointFillColor: vars.color.primary['--color-typo-brand'],
    pointFillOpacity: 0.95,
    pointSize: getNumber(vars.space['--space-2xs']),
    pointBorder: chartLineWidth,
    pointBorderColor: '#ff00d0',
    pointBorderOpacity: 1,
    pointActiveBorderColor: vars.color.primary['--color-typo-primary'],
    pointSelectedBorder: chartLineWidth * 2,
    pointSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    pointInactiveFillOpacity: 0.3,
    pointInactiveBorderOpacity: 0.3,
    hollowPointSize: getNumber(vars.space['--space-2xs']),
    hollowPointBorder: chartLineWidth,
    hollowPointBorderColor: vars.color.primary['--color-typo-brand'],
    hollowPointBorderOpacity: 0.95,
    hollowPointFillColor: '#ff00d0',
    hollowPointActiveBorder: 1,
    hollowPointActiveBorderColor: vars.color.primary['--color-typo-primary'],
    hollowPointActiveBorderOpacity: 1,
    hollowPointSelectedBorder: 2,
    hollowPointSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    hollowPointSelectedBorderOpacity: 1,
    hollowPointInactiveBorderOpacity: 0.3,
    lineBorder: chartLineWidth * 2,
    lineBorderColor: vars.color.primary['--color-typo-brand'],
    lineBorderOpacity: 1,
    lineActiveBorder: chartLineWidth * 3,
    lineSelectedBorder: chartLineWidth * 3,
    lineInactiveBorderOpacity: 0.3,
    areaFillColor: vars.color.primary['--color-typo-brand'],
    areaFillOpacity: 0.25,
    areaActiveFillColor: vars.color.primary['--color-typo-brand'],
    areaActiveFillOpacity: 0.5,
    areaSelectedFillColor: vars.color.primary['--color-typo-brand'],
    areaSelectedFillOpacity: 0.5,
    areaInactiveFillOpacity: 0.3,
    hollowAreaBorderColor: vars.color.primary['--color-typo-brand'],
    hollowAreaBorder: chartLineWidth * 2,
    hollowAreaBorderOpacity: 1,
    hollowAreaActiveBorder: chartLineWidth * 3,
    hollowAreaActiveBorderColor: vars.color.primary['--color-typo-primary'],
    hollowAreaSelectedBorder: chartLineWidth * 3,
    hollowAreaSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    hollowAreaInactiveBorderOpacity: 0.3,
    intervalFillColor: vars.color.primary['--color-typo-brand'],
    intervalFillOpacity: 0.95,
    intervalActiveBorder: 1,
    intervalActiveBorderColor: vars.color.primary['--color-typo-primary'],
    intervalActiveBorderOpacity: 1,
    intervalSelectedBorder: chartLineWidth * 2,
    intervalSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    intervalSelectedBorderOpacity: 1,
    intervalInactiveBorderOpacity: 0.3,
    intervalInactiveFillOpacity: 0.3,
    hollowIntervalBorder: chartLineWidth * 2,
    hollowIntervalBorderColor: vars.color.primary['--color-typo-brand'],
    hollowIntervalBorderOpacity: 1,
    hollowIntervalFillColor: '#ff00d0',
    hollowIntervalActiveBorder: chartLineWidth * 2,
    hollowIntervalActiveBorderColor: vars.color.primary['--color-typo-primary'],
    hollowIntervalSelectedBorder: chartLineWidth * 3,
    hollowIntervalSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    hollowIntervalSelectedBorderOpacity: 1,
    hollowIntervalInactiveBorderOpacity: 0.3,
  }

  return createThemeByStyleSheet(styleSheet)
}

export const useChartTheme = () => getChartTheme(useThemeVars())
