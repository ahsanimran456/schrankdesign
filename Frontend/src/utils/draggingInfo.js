import Config from "../common/config"

export const getDefaultScale = (type, drawerHeight, depth) => {
  return type === Config.furnishing.type.shelf ||
    type === Config.furnishing.type.pantsPullout
    ? [
        (Config.furnishing.shelf.minWidth + Config.furnishing.shelf.maxWidth) /
          2 -
          Config.furnishing.default.spaceSides * 2,
        Config.furnishing.shelf.thickness1,
        depth -
          Config.furnishing.default.spaceFront -
          Config.plate.backThickness -
          Config.plate.backIncident,
      ]
    : type === Config.furnishing.type.glassBottom
    ? [
        (Config.furnishing.glassBottom.minWidth +
          Config.furnishing.glassBottom.maxWidth) /
          2 -
          Config.furnishing.default.spaceSides * 2,
        Config.furnishing.glassBottom.thickness,
        depth -
          Config.furnishing.default.spaceFront -
          Config.plate.backThickness -
          Config.plate.backIncident,
      ]
    : type === Config.furnishing.type.foldBottom
    ? [
        (Config.furnishing.foldBottom.minWidth +
          Config.furnishing.foldBottom.maxWidth) /
          2 -
          Config.furnishing.default.spaceSides * 2,
        Config.furnishing.foldBottom.thickness1,
        depth -
          Config.furnishing.default.spaceFront -
          Config.plate.backThickness -
          Config.plate.backIncident,
      ]
    : type === Config.furnishing.type.drawer
    ? [
        Config.furnishing.drawer.defaultWidth,
        drawerHeight,
        getDrawerDepth(type, depth),
      ]
    : type === Config.furnishing.type.internalDrawer
    ? [
        Config.furnishing.drawer.defaultWidth,
        drawerHeight,
        getDrawerDepth(type, depth),
      ]
    : type === Config.furnishing.type.clothesRail
    ? [
        Config.furnishing.clothesRail.defaultWidth,
        Config.furnishing.clothesRail.defaultHeight,
        Config.furnishing.clothesRail.defaultDepth,
      ]
    : type === Config.furnishing.type.clothesLift
    ? [
        Config.furnishing.clothesLift.defaultWidth,
        Config.furnishing.clothesLift.defaultHeight,
        Config.furnishing.clothesLift.defaultDepth,
      ]
    : type === Config.furnishing.type.ledLighting
    ? [
        Config.furnishing.default.elementWidth,
        Config.furnishing.default.elementHeight,
        Config.furnishing.ledLighting.defaultDepth,
      ]
    : type === Config.furnishing.type.slopingFloor
    ? [
        Config.furnishing.slopingFloor.defaultWidth,
        (Config.furnishing.slopingFloor.wallHeight +
          Config.furnishing.slopingFloor.thickness) *
          Math.cos(Config.furnishing.slopingFloor.angle) +
          (depth -
            2 * Config.furnishing.slopingFloor.zIncident -
            (Config.furnishing.slopingFloor.wallHeight +
              Config.furnishing.slopingFloor.thickness) *
              Math.sin(Config.furnishing.slopingFloor.angle)) *
            Math.tan(Config.furnishing.slopingFloor.angle),
        depth - Config.plate.backIncident - Config.plate.backThickness,
      ]
    : type === Config.furnishing.type.divider
    ? [
        Config.furnishing.divider.thickness,
        Config.furnishing.divider.defaultHeight,
        depth - Config.plate.backIncident - Config.plate.backThickness,
      ]
    : type === Config.furnishing.type.door
    ? [
        Config.door.defaultWidth,
        Config.door.defaultHeight,
        Config.plate.thickness,
      ]
    : [0, 0, 0]
}

export const getPosZAvailable = (type, depth) => {
  const drawerDepth = getDrawerDepth(type, depth)

  return type === Config.furnishing.type.shelf ||
    type === Config.furnishing.type.glassBottom ||
    type === Config.furnishing.type.foldBottom ||
    type === Config.furnishing.type.pantsPullout
    ? depth / 2 +
        Config.plate.backThickness / 2 +
        Config.plate.backIncident / 2 -
        Config.furnishing.default.spaceFront / 2
    : type === Config.furnishing.type.drawer
    ? depth + Config.furnishing.drawer.bodyFrontIncident - drawerDepth / 2
    : type === Config.furnishing.type.internalDrawer
    ? depth -
      Config.furnishing.internalDrawer.frontInnerSpace -
      Config.plate.thickness -
      drawerDepth / 2
    : type === Config.furnishing.type.clothesRail ||
      type === Config.furnishing.type.clothesLift
    ? depth / 2 + Config.plate.backThickness / 2 + Config.plate.backIncident / 2
    : type === Config.furnishing.type.ledLighting
    ? depth -
      Config.furnishing.ledLighting.frontInnerSpace -
      Config.furnishing.ledLighting.defaultDepth / 2
    : type === Config.furnishing.type.slopingFloor
    ? depth -
      Config.furnishing.slopingFloor.zIncident -
      (Config.furnishing.slopingFloor.wallHeight +
        Config.furnishing.slopingFloor.thickness) *
        Math.sin(Config.furnishing.slopingFloor.angle)
    : type === Config.furnishing.type.divider
    ? depth / 2 + (Config.plate.backThickness + Config.plate.backIncident) / 2
    : type === Config.furnishing.type.door
    ? depth + Config.plate.thickness / 2
    : 0
}

const getDrawerDepth = (type, depth) => {
  const drawerDepthLimit =
    depth -
    Config.plate.backIncident -
    Config.plate.backThickness -
    Config.furnishing.drawer.backSpace -
    (type === Config.furnishing.type.internalDrawer
      ? Config.furnishing.internalDrawer.frontInnerSpace
      : 0)

  let i
  for (i = 0; i < Config.furnishing.drawer.depthRange.length; i++) {
    if (Config.furnishing.drawer.depthRange[i] < drawerDepthLimit) break
  }

  return Config.furnishing.drawer.depthRange[i]
}

export const getDraggingInfo = (args) => {
  const {
    type,
    top,
    bottom,
    topAsset,
    bottomAsset,
    initialPosY,
    raster,
    availableWidth,
    objectHeight,
  } = args

  let posY = initialPosY

  let objectWidth = availableWidth

  let topVisible = true
  let bottomVisible = true
  let topConnected = false
  let bottomConnected = false

  if (
    type === Config.furnishing.type.shelf ||
    type === Config.furnishing.type.foldBottom ||
    type === Config.furnishing.type.glassBottom ||
    type === Config.furnishing.type.pantsPullout
  ) {
    if (posY > top) posY = top

    posY =
      bottom + Math.floor((posY - bottom) / raster) * raster + objectHeight / 2

    objectWidth = availableWidth - Config.furnishing.default.spaceSides * 2
  } else if (type === Config.furnishing.type.slopingFloor) {
    if (posY > top) posY = top
    else posY = bottom + Math.floor((posY - bottom) / raster) * raster

    objectWidth = availableWidth
  } else if (
    type === Config.furnishing.type.clothesRail ||
    type === Config.furnishing.type.clothesLift
  ) {
    if (posY > top) posY = top + objectHeight / 2
    else
      posY =
        bottom +
        Math.floor((posY - bottom) / raster) * raster +
        objectHeight / 2

    objectWidth = availableWidth
  } else if (
    type === Config.furnishing.type.drawer ||
    type === Config.furnishing.type.internalDrawer
  ) {
    const bottomShelfDistance =
      type === Config.furnishing.type.drawer
        ? Config.furnishing.drawer.bottomShelfDistance
        : Config.furnishing.internalDrawer.bottomShelfDistance
    if (
      posY >
      top +
        Config.furnishing.drawer.shelfThickness1 +
        bottomShelfDistance +
        objectHeight / 2 -
        Config.furnishing.default.interval
    ) {
      if (topAsset === "none") {
        posY =
          top +
          2 * Config.furnishing.drawer.shelfThickness1 +
          bottomShelfDistance +
          objectHeight / 2

        topVisible = false
      } else {
        posY =
          top +
          Config.furnishing.drawer.shelfThickness1 +
          bottomShelfDistance +
          objectHeight / 2

        if (
          topAsset === Config.furnishing.type.drawer ||
          topAsset === Config.furnishing.type.internalDrawer
        ) {
          topVisible = false
          topConnected = true
        } else {
          topVisible = true
        }
      }
    } else if (
      posY <
      bottom +
        Config.furnishing.drawer.shelfThickness1 +
        bottomShelfDistance +
        objectHeight / 2 +
        Config.furnishing.default.interval
    ) {
      if (bottomAsset === "none") {
        posY = bottom + bottomShelfDistance + objectHeight / 2

        bottomVisible = false
      } else {
        posY =
          bottom +
          Config.furnishing.drawer.shelfThickness1 +
          bottomShelfDistance +
          objectHeight / 2

        if (
          bottomAsset === Config.furnishing.type.drawer ||
          bottomAsset === Config.furnishing.type.internalDrawer
        ) {
          bottomVisible = false
          bottomConnected = true
        } else {
          bottomVisible = true
        }
      }
    } else {
      posY =
        bottom +
        Math.floor(
          (posY -
            Config.furnishing.drawer.shelfThickness1 -
            bottomShelfDistance -
            objectHeight / 2 -
            bottom) /
            raster
        ) *
          raster +
        Config.furnishing.drawer.shelfThickness1 +
        bottomShelfDistance +
        objectHeight / 2

      topVisible = true
      topConnected = false

      bottomVisible = true
      bottomConnected = false
    }

    if (type === Config.furnishing.type.drawer) {
      objectWidth = availableWidth - Config.furnishing.drawer.sideIncident * 2
    } else if (type === Config.furnishing.type.internalDrawer) {
      objectWidth =
        availableWidth -
        Config.furnishing.internalDrawer.panelWidth * 2 -
        Config.furnishing.internalDrawer.panelSpace * 2
    }
  }

  return {
    posY,
    objectWidth,
    topVisible,
    bottomVisible,
    topConnected,
    bottomConnected,
  }
}