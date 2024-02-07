import Config from "../common/config"
import { getDefaultScale, getPosZAvailable } from "./draggingInfo"

export const updateFurnishing = (
  elementsCount,
  elementsWidths,
  depth,
  furnishingAssets
) => {
  // x position for elements
  const elementsXInfo = []
  for (let index = 0; index < elementsCount; index++) {
    if (index == 0) {
      elementsXInfo.push(Config.plate.thickness + elementsWidths[index] / 2)
    } else {
      elementsXInfo.push(
        elementsXInfo[index - 1] +
          elementsWidths[index - 1] / 2 +
          Config.plate.thickness +
          elementsWidths[index] / 2
      )
    }
  }

  const updatedFurnishingAsset = furnishingAssets.map((asset) => {
    const defaultScale = getDefaultScale(asset.type, asset.scale[1], depth)

    if (!asset.inDivider) {
      return {
        ...asset,
        position: [
          elementsXInfo[asset.xIndex],
          asset.position[1],
          getPosZAvailable(asset.type, depth),
        ],
        scale: [
          asset.type === Config.furnishing.type.shelf ||
          asset.type === Config.furnishing.type.foldBottom ||
          asset.type === Config.furnishing.type.glassBottom ||
          asset.type === Config.furnishing.type.pantsPullout
            ? elementsWidths[asset.xIndex] -
              Config.furnishing.default.spaceSides * 2
            : asset.type === Config.furnishing.type.drawer
            ? elementsWidths[asset.xIndex] -
              Config.furnishing.drawer.sideIncident * 2
            : asset.type === Config.furnishing.type.internalDrawer
            ? elementsWidths[asset.xIndex] -
              (Config.furnishing.internalDrawer.panelSpace +
                Config.furnishing.internalDrawer.panelWidth) *
                2
            : asset.type === Config.furnishing.type.clothesRail ||
              asset.type === Config.furnishing.type.clothesLift ||
              asset.type === Config.furnishing.type.slopingFloor ||
              asset.type === Config.furnishing.type.divider
            ? elementsWidths[asset.xIndex]
            : defaultScale[0],
          asset.type === Config.furnishing.type.divider
            ? asset.scale[1]
            : defaultScale[1],
          defaultScale[2],
        ],
      }
    } else {
      return {
        ...asset,
        position: [
          asset.position[0],
          asset.position[1],
          getPosZAvailable(asset.type, depth),
        ],
        scale: [
          asset.scale[0],
          asset.type === Config.furnishing.type.divider
            ? asset.scale[1]
            : defaultScale[1],
          defaultScale[2],
        ],
      }
    }
  })

  return updatedFurnishingAsset
}

export const updateLedAssets = (
  elementsCount,
  elementsWidths,
  height,
  depth,
  baseType,
  ledAssets
) => {
  // x position for elements
  const elementsXInfo = []
  for (let index = 0; index < elementsCount; index++) {
    if (index == 0) {
      elementsXInfo.push(Config.plate.thickness + elementsWidths[index] / 2)
    } else {
      elementsXInfo.push(
        elementsXInfo[index - 1] +
          elementsWidths[index - 1] / 2 +
          Config.plate.thickness +
          elementsWidths[index] / 2
      )
    }
  }

  const elementsTop = height - Config.plate.thickness
  const elementsBottom =
    (baseType == Config.baseType.panel
      ? Config.plate.plinthHeight
      : Config.glider.height) + Config.plate.thickness

  const result = ledAssets.map((asset) => {
    return {
      ...asset,
      position: [
        elementsXInfo[asset.xIndex],
        (elementsTop + elementsBottom) / 2,
        depth -
          Config.furnishing.ledLighting.frontInnerSpace -
          Config.furnishing.ledLighting.defaultDepth / 2,
      ],
      scale: [
        elementsWidths[asset.xIndex],
        elementsTop - elementsBottom,
        Config.furnishing.ledLighting.defaultDepth,
      ],
    }
  })

  return result
}

export const updateFurnishingBaseType = (baseType, furnishingAssets) => {
  const difference = Config.plate.plinthHeight - Config.glider.height

  const result = furnishingAssets.map((asset) => {
    if (baseType === Config.baseType.gliders) {
      return {
        ...asset,
        position: [
          asset.position[0],
          asset.position[1] - difference,
          asset.position[2],
        ],
      }
    } else {
      return {
        ...asset,
        position: [
          asset.position[0],
          asset.position[1] + difference,
          asset.position[2],
        ],
      }
    }
  })

  return result
}
