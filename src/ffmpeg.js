const createFFMPEG = require('fluent-ffmpeg')
const installFFMPEG = require('ffmpeg-static')
const installFFProbe = require('ffprobe-static')

module.exports = createFFMPEG()
    .setFfmpegPath(installFFMPEG.path)
    .setFfprobePath(installFFProbe.path)
