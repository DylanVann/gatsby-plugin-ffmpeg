const createFFMPEG = require('fluent-ffmpeg')
const ffmpegPath = require('ffmpeg-static')
const installFFProbe = require('ffprobe-static')

module.exports = createFFMPEG()
  .setFfmpegPath(ffmpegPath)
  .setFfprobePath(installFFProbe.path)
