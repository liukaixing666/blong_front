<template>
    <div class="video-player-box">

        <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" >
        </video-player>
    </div>
</template>

<style>
    .video-player-box{
        width: 200px;
    }
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .vjs-tech{
        width:800px;
    }
    .vjs-control-text{
        display: none;
    }
    .vjs-control-bar{
         display: none;
    }
    .vjs-track-setting{
        display: none;
    }
    .vjs-modal-dialog-content{
        display: none;
    }
    .vjs-big-play-button{
        display: none;
    }
    .vjs-close-button{
        display: none;
    }
</style>

<script>
    export default {
        data() {
            return {
                playerOptions: {
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                }
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        
    }

</script>