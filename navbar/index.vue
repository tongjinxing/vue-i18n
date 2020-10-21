<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb
      id="breadcrumb-container"
      class="breadcrumb-container"
    />
          
    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <i class="el-icon-setting" />
          <i class="el-icon-caret-bottom" />
        </div>
        
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{$t('m.go_home')}}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <div class="right-menu name-style" v-if="name">
              <el-dropdown
                class="avatar-container right-menu-item hover-effect"
                trigger="hover"
                placement="left"
              >
                <div>
                  {{$t('m.lable_alert')}}
                </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >
                      <div class="lang-item" @click="onSubmit('zh-CN')">{{$t('m.chinese')}}</div>
                    </el-dropdown-item>
                    <el-dropdown-item >
                      <div class="lang-item" @click="onSubmit('zh-TW')">{{$t('m.chin_tw')}}</div>
                    </el-dropdown-item>
                    <el-dropdown-item >
                      <div class="lang-item" @click="onSubmit('en-US')">{{$t('m.english')}}</div> 
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="right-menu name-style" v-if="name">
        {{$t('m.lable_name')}}<b>{{ name }}</b> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import appModule from '@/web/store/modules/app'
import userModule from '@/web/store/modules/user'
import Breadcrumb from '@/web/components/breadcrumb/index.vue'
import Hamburger from '@/web/components/hamburger/index.vue'
import { userStore } from '@/web/store/modules/user'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger,
  },
})
export default class extends Vue {
  get sidebar () {
    return appModule.sidebar || { opened: true }
  }

  get device () {
    return 'Desktop'
  }

  get name () {
    return userStore.name
  }

  get avatar () {
    // return userModule.avatar
    return ''
  }

  private toggleSideBar () {
    appModule.ToggleSideBar(false)
  }

  private onSubmit( type: string ) {
      localStorage.setItem('localeLang', type)
      let self_current_lang = type
      if (self_current_lang) {
        // 切换系统语言
        this.$i18n.locale = self_current_lang
        this.$message.success(`${this.$t('m.successText')}`)
      } else {
        this.$message.warning(`${this.$t('m.no_select_lang')}`)
      }
    }

  private async logout () {
    // await UserModule.LogOut()
    await Promise.resolve()

    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .name-style{
    font-size: 14px;
    margin-right: 20px;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
