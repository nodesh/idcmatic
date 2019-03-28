<template>
  <div id="app">
    <!--<idc-container>
      <idc-header>Header</idc-header>
      <idc-container>
        <idc-aside>Aside</idc-aside>
        <idc-container>
          <idc-main>Main</idc-main>
          <idc-footer>Footer</idc-footer>
        </idc-container>
      </idc-container>
    </idc-container>-->

    <idc-row>
      <idc-col :span="8">
        <div class="grid-content bg-purple"></div>
      </idc-col>
      <idc-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </idc-col>
      <idc-col :span="8">
        <div class="grid-content bg-purple"></div>
      </idc-col>
    </idc-row>

    <idc-tag>tag</idc-tag>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    methods: {
      handleClick(evt) {
        console.log(evt.target);
      }
    }
  };
</script>

<style>
  #app {
    text-align: center;
  }

  .idc-header,
  .idc-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .idc-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .idc-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .idc-row {
    margin-bottom: 20px;
  }

  .idc-row:last-child {
    margin-bottom: 0;
  }

  .idc-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
