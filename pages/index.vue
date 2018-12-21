<template>
  <div class="container">
    <span
      class="setting-btn"
      @click="dialogVisible = true">
      <i class="el-icon-location" />
    </span>

    <div class="count-box">
      {{ countStr }}
    </div>

    <el-switch
      v-model="opened"
      :width="60"/>

    <span class="clock">{{ timeStr }}</span>

    <el-dialog
      :visible.sync="dialogVisible"
      title="设置时间间隔"
      width="30%">
      <el-time-picker
        v-model="countTime"
        :picker-options="{
          selectableRange: '00:01:00 - 23:59:59'
        }"
        placeholder="任意时间点" />

      <el-input
        v-model="warningText"
        class="dialog-input"
        placeholder="输入警告语..."/>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { formatTime } from '../components/utils.js'

export default {
  data () {
    return {
      // 当前时间显示
      timeStr: '',
      // 倒计时显示字符串
      countStr: '00:00:00',
      // 设置窗口是否可视
      dialogVisible: false,
      // 默认倒计时（基于时间戳）
      countTime: -28740000,
      // 倒计时计数
      counting: 0,
      // 警告语
      warningText: '',
      // 是否可以显示系统通知
      isGranted: false,
      // 计时器
      timer: null,
      // 是否开启倒计时
      opened: false
    }
  },
  watch: {
    // 开启状态发生变化
    opened (newVal) {
      clearTimeout(this.timer)
      if (newVal) {
        if (this.counting <= 0) {
          this.opened = false
          this.$message({
            message: '需要先去设置一下时间噢！',
            type: 'error'
          })
          return
        }
        this.count()
      }
    }
  },
  mounted () {
    // 申请系统通知权限
    Notification.requestPermission( (status) => {
      this.isGranted = (status === 'granted')
    })
    let now = new Date()
    this.timeStr = formatTime(now)
    this.timing()
    this.counting = localStorage.getItem('time-to-rest-counting') ?
      parseInt(localStorage.getItem('time-to-rest-counting')) : 0
  },
  methods: {
    // 当前时间更新
    timing () {
      let now = new Date()
      this.timeStr = formatTime(now)
      this.timer = setTimeout(() => {
        this.timing()
      })
    },
    // 倒计时
    count () {
      this.countStr = this.toHHMMSS(this.counting / 1000)
      if (this.counting === 0) {
        if (this.isGranted) {
          new Notification('Time to rest', {body: this.warningText || '到了休息的时候了，去运动一下吧~'})
        } else {
          alert(this.warningText || '到了休息的时候了，去运动一下吧~')
        }
        this.opened = false
        return
      }
      this.timer = setTimeout(() => {
        this.counting -= 1000
        this.count()
      }, 1000)
    },
    // 设置提交
    submit () {
      this.dialogVisible = false
      this.counting = new Date(this.countTime).getTime() - new Date('1970 00:00:00').getTime()
      if (this.counting >= 0) {
        localStorage.setItem('time-to-rest-counting', this.counting)
        this.opened = true
      } else {
        this.$message({
          message: '时间设置有误，请重试',
          type: 'error'
        })
      }
    },
    // 转换毫秒数为HH:MM:SS格式
    toHHMMSS (sec_num) {
      let hours   = Math.floor(sec_num / 3600)
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60)
      let seconds = sec_num - (hours * 3600) - (minutes * 60)

      if (hours < 10) {hours   = "0" + hours}
      if (minutes < 10) {minutes = "0" + minutes}
      if (seconds < 10) {seconds = "0" + seconds}
      return hours + ':' + minutes + ':' + seconds
    }
  }
}
</script>

<style>
body {
  padding: 0;
  background-color: #263238;
  color: #ECEFF1;
}
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.setting-btn {
  position: absolute;
  top: 36px;
  right: 36px;
  font-size: 36px;
  cursor: pointer;
}
.dialog-input {
  margin-top: 24px;
}
.count-box {
  font-size: 120px;
  letter-spacing: .2em;
}
.clock {
  font-size: 24px;
  letter-spacing: .1em;
  margin-top: 24px;
}
</style>
