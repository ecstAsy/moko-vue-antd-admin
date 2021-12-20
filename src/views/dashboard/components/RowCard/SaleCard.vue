<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 11:33:06
 * @LastEditTime: 2021-12-09 11:59:43
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
      <div style="text-align:left">
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
      </div>
    </div>
    <a-row class="footer">
      日销售额￥12,423
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import RowTitle from "./RowTitle.vue";
</script>
