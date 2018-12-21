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
      title="Setting Config"
      width="40%">
      <el-time-picker
        v-model="countTime"
        :picker-options="{
          selectableRange: '00:01:00 - 23:59:59'
        }"
        placeholder="notification interval" />

      <el-input
        v-model="warningText"
        class="dialog-input"
        placeholder="notification text"/>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          @click="dialogVisible = false">CANCEL</el-button>
        <el-button
          type="primary"
          @click="submit">SUBMIT</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { formatTime } from '../components/utils.js'

export default {
  data () {
    return {
      // current time string
      timeStr: '',
      // counting time string
      countStr: '00:00:00',
      // setting's dialog visible
      dialogVisible: false,
      // default counting time picker value, base on timestamp.
      countTime: -28740000,
      // counting number(millisecond)
      counting: 0,
      // nitification warning text
      warningText: '',
      // is allowed to notification
      isGranted: false,
      // counting timmer
      timer: null,
      // counting opened
      opened: false
    }
  },
  watch: {
    // counting opened status change, start/stop to count
    opened (newVal) {
      clearTimeout(this.timer)
      if (newVal) {
        if (this.counting <= 0) {
          this.opened = false
          this.$message({
            message: 'You need to set the notification interval first!',
            type: 'error'
          })
          return
        }
        this.count()
      }
    }
  },
  mounted () {
    // apply for notification
    Notification.requestPermission( (status) => {
      this.isGranted = (status === 'granted')
    })
    let now = new Date()
    this.timeStr = formatTime(now)
    this.timing()
    this.counting = localStorage.getItem('time-to-rest-counting') ?
      parseInt(localStorage.getItem('time-to-rest-counting')) : 0
    if (this.counting > 0) {
      this.countStr = this.toHHMMSS(this.counting / 1000)
    }
  },
  methods: {
    // update current time string
    timing () {
      let now = new Date()
      this.timeStr = formatTime(now)
      this.timer = setTimeout(() => {
        this.timing()
      })
    },
    // counting
    count () {
      this.countStr = this.toHHMMSS(this.counting / 1000)
      if (this.counting === 0) {
        if (this.isGranted) {
          new Notification('Time to rest', {body: this.warningText || 'It\'s time to rest!'})
        } else {
          alert(this.warningText || 'It\'s time to rest!')
        }
        this.opened = false
        return
      }
      this.timer = setTimeout(() => {
        this.counting -= 1000
        this.count()
      }, 1000)
    },
    // submit the setting
    submit () {
      this.dialogVisible = false
      this.counting = new Date(this.countTime).getTime() - new Date('1970 00:00:00').getTime()
      if (this.counting >= 0) {
        localStorage.setItem('time-to-rest-counting', this.counting)
        this.opened = true
      } else {
        this.$message({
          message: 'notification interval is wrong, try again!',
          type: 'error'
        })
      }
    },
    // stranslate the millisecond to HH:MM:SS string.
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
