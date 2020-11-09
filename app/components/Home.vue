<template>
<Page
  actionBarHidden="true"
  backgroundColor="red"
  @loaded="load">
  <CanvasView
    ref="canvas"
    width="100%"
    height="100%"
    @draw="drawCanvas"/>
</Page>
</template>

<script>
import {
  Screen,
  Color
} from '@nativescript/core'

import {
  Paint,
  Style,
  Path,
  Op,
  Direction
} from '@nativescript-community/ui-canvas'

export default {
  data: () => ({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    clipRadius: 0,
    baseWidth: null,
    baseHeight: null,
    halfWidth: 0,
    clipX: 0,
    clipY: 0
  }),
  methods: {
    load () {
      this.baseWidth = Screen.mainScreen.widthDIPs
      this.baseHeight = Screen.mainScreen.heightDIPs
      this.halfWidth = this.baseWidth / 2
      this.clipRadius = this.halfWidth * 0.9
      this.clipX = this.halfWidth
      this.clipY = (this.baseHeight / 10) + this.clipRadius
    },
    drawCanvas ({ canvas }) {
      // clipPath
      const clipPath = new Path()

      canvas.save()
      clipPath.addCircle(this.clipX, this.clipY, this.clipRadius, Direction.CW)
      canvas.clipPath(clipPath, Op.DIFFERENCE)

      const backgroundPaint = new Paint()
      backgroundPaint.setAntiAlias(true)
      backgroundPaint.setColor(new Color(this.backgroundColor))
      backgroundPaint.setStyle(Style.FILL)
      canvas.drawPaint(backgroundPaint)
      canvas.restore()
    }
  }
};
</script>
