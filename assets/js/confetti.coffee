---
---


NUM_CONFETTI = 50
COLORS = [[255,205,0], [255,255,255], [150,0,255], [244,92,68], [248,182,70]]
PI_2 = 2*Math.PI


canvas = document.getElementById "world"
context = canvas.getContext "2d"
window.w = window.innerWidth
window.h = window.innerHeight

resizeWindow = ->
  window.w = canvas.width = window.innerWidth

  window.h = canvas.height = window.innerHeight * 3

window.addEventListener 'resize', resizeWindow, false

window.onload = -> setTimeout resizeWindow, 0

range = (a,b) -> (b-a)*Math.random() + a

drawCircle = (x,y,r,style) ->
  context.beginPath()
  context.arc(x,y,r*6,0,PI_2,false)
  context.fillStyle = style
  context.fill()

xpos = 0.5

document.onmousemove = (e) ->
  xpos = (e.pageX/w)*1

window.requestAnimationFrame = do ->
  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  (callback) -> window.setTimeout(callback, 1000 / 60)

class Confetti

  constructor: ->
    @style = COLORS[~~range(0,5)]
    @rgb = "rgba(#{@style[0]},#{@style[1]},#{@style[2]}"
    @r = ~~range(2,6)
    @r2 = 2*@r
    @replace()

  replace: ->
    @opacity = 0
    @dop = 0.005*range(1,2)
    @x = range(-@r2,w-@r2)
    @y = range(-20,h-@r2)
    @xmax = w-@r
    @ymax = h-@r
    @vx = (1/15)*(range(0,8)+xpos)
    @vy = (1/2)*(0.07*@r+range(-1,1))*((Math.random())*(3)*(-1))

  draw: ->
    @x += @vx
    @y += @vy
    @opacity += @dop
    if @opacity > 1
      @opacity = 0.8
      @dop *= -1
    @replace() if @opacity < 0 or @y > @ymax
    if !(0 < @x < @xmax)
      @x = (@x + @xmax) % @xmax
    drawCircle(~~@x,~~@y,@r,"#{@rgb},#{@opacity})")

confetti = (new Confetti for i in [1..NUM_CONFETTI])

window.step = ->
  requestAnimationFrame(step)
  context.clearRect(0,0,w,h)
  c.draw() for c in confetti

step()
