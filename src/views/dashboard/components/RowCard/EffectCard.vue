<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 11:33:20
 * @LastEditTime: 2021-12-09 13:33:42
 * @LastEditors: ecstAsy
-->

<template>
  <a-card>
    <row-title
      title="总销售额"
      value="¥ 126,560"
      tooltip="总销售额"
    />
    <div class="content">
      <div style="width:100%">
        <a-progress
          :stroke-color="{
            '0%': '#108ee9',
            '100%': '#87d068',
          }"
          :percent="78"
        />
      </div>
    </div>
    <a-row class="footer">
      <span>
        周同比12%
        <moko-icon
          icon="arrow-up-outlined"
          class="status-error"
        />
      </span>
      <span style="margin-left: 16px;">
        日同比11%
        <moko-icon
          icon="arrow-down-outlined"
          class="status-success"
        />
      </span>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import RowTitle from "./RowTitle.vue";
</script>
