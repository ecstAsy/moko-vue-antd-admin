<!--
 * @Author: ecstAsy
 * @Date: 2021-12-02 15:58:33
 * @LastEditTime: 2021-12-09 11:30:13
 * @LastEditors: ecstAsy
-->
<template>
  <div class="dashboard">
    <row-card />
    <bar-card />
  </div>
</template>

<script setup lang="ts">
import { RowCard, BarCard } from "./components";
</script>

<style>
.dashboard {
  color: aqua;
}
</style>
