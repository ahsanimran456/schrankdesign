import Config from "../common/config"

export const getArrayIndex = (
  assets,
  xIndex,
  yPos,
  inDivider,
  d_xIndex,
  d_yPos
) => {
  return assets.findIndex((asset) => {
    const condition =
      (!inDivider &&
        asset.inDivider === false &&
        asset.xIndex === xIndex &&
        asset.position[1] === yPos) ||
      (inDivider &&
        asset.inDivider === true &&
        asset.xIndex === xIndex &&
        asset.position[1] === yPos &&
        asset.d_xIndex === d_xIndex &&
        asset.d_yPos === d_yPos)

    return condition
  })
}

export const getMaxHeight = (posY, scaleY, type) => {
  if (
    type === Config.furnishing.type.shelf ||
    type === Config.furnishing.type.glassBottom
  ) {
    return (
      posY -
      scaleY / 2 +
      Config.furnishing.shelf.interval +
      Config.plate.thickness
    )
  } else if (type === Config.furnishing.type.drawer) {
    return (
      posY +
      scaleY / 2 +
      Config.furnishing.drawer.topShelfDistance +
      Config.plate.thickness
    )
  } else if (type === Config.furnishing.type.internalDrawer) {
    return (
      posY +
      scaleY / 2 +
      Config.furnishing.internalDrawer.topShelfDistance +
      Config.plate.thickness
    )
  } else if (type === Config.furnishing.type.clothesRail) {
    return posY + scaleY / 2 + Config.furnishing.clothesRail.topSpace
  } else if (type === Config.furnishing.type.clothesLift) {
    return posY + scaleY / 2 + Config.furnishing.clothesLift.topSpace
  }

  return (
    posY +
    scaleY / 2 +
    Config.furnishing.default.interval +
    Config.plate.thickness
  )
}

export const getInternalDrawerSides = (assets) => {
  const result = []

  // assets.map((xAssets, xIndex) => {
  //   result[xIndex] = []
  //   const sideData = {}
  //   let isSequential = false
  //   const tempAssets = [...xAssets]
  //   tempAssets
  //     .sort((a, b) => a.position[1] - b.position[1])
  //     .map((asset, yIndex) => {
  //       if (
  //         asset.type !== Config.furnishing.type.internalDrawer ||
  //         asset.bottomVisible === true
  //       ) {
  //         if (isSequential && sideData.stopYIndex !== undefined) {
  //           result[xIndex].push({ ...sideData })
  //           for (const key in sideData) {
  //             delete sideData[key]
  //           }
  //         }
  //         isSequential = false
  //       }

  //       if (asset.type === Config.furnishing.type.internalDrawer) {
  //         if (!isSequential && asset.topVisible === false) {
  //           isSequential = true
  //           sideData.startPosY = asset.position[1]
  //           sideData.startYIndex = yIndex
  //         } else if (isSequential && asset.bottomVisible === false) {
  //           sideData.stopPosY = asset.position[1]
  //           sideData.stopYIndex = yIndex
  //         }
  //       }

  //       if (yIndex === xAssets.length - 1 && sideData.stopYIndex === yIndex) {
  //         result[xIndex].push({ ...sideData })
  //       }
  //     })
  // })

  return result
}
