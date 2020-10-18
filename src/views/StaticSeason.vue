<template>
  <S1900 v-if="getID == 1900" />
  <S1901 v-else-if="getID == 1901" />
  <S1902 v-else-if="getID == 1902" />
  <!---->
  <S1000 v-else-if="getID == 1000" />
  <S1001 v-else-if="getID == 1001" />
  <S1002 v-else-if="getID == 1002" />
  <S1003 v-else-if="getID == 1003" />
  <S1004 v-else-if="getID == 1004" />
  <S1005 v-else-if="getID == 1005" />
  <S1006 v-else-if="getID == 1006" />
  <S1007 v-else-if="getID == 1007" />
  <S1008 v-else-if="getID == 1008" />
  <S1009 v-else-if="getID == 1009" />
  <!---->
  <S1100 v-else-if="getID == 1100" />
  <S1101 v-else-if="getID == 1101" />
  <S1102 v-else-if="getID == 1102" />
  <S1103 v-else-if="getID == 1103" />
  <S1104 v-else-if="getID == 1104" />
  <S1105 v-else-if="getID == 1105" />
  <S1106 v-else-if="getID == 1106" />
  <S1107 v-else-if="getID == 1107" />
  <S1108 v-else-if="getID == 1108" />
  <S1109 v-else-if="getID == 1109" />
  <!---->
  <S2000 v-else-if="getID == 2000" />
  <S2001 v-else-if="getID == 2001" />
  <S2002 v-else-if="getID == 2002" />
  <S2003 v-else-if="getID == 2003" />
  <S2004 v-else-if="getID == 2004" />
  <S2005 v-else-if="getID == 2005" />
  <S2006 v-else-if="getID == 2006" />
  <S2007 v-else-if="getID == 2007" />
  <S2008 v-else-if="getID == 2008" />
  <S2009 v-else-if="getID == 2009" />
  <!---->
  <S2100 v-else-if="getID == 2100" />
  <S2101 v-else-if="getID == 2101" />
  <S2102 v-else-if="getID == 2102" />
  <S2103 v-else-if="getID == 2103" />
  <S2104 v-else-if="getID == 2104" />
  <S2105 v-else-if="getID == 2105" />
  <S2106 v-else-if="getID == 2106" />
  <S2107 v-else-if="getID == 2107" />
  <S2108 v-else-if="getID == 2108" />
  <S2109 v-else-if="getID == 2109" />
  <!---->
  <S2200 v-else-if="getID == 2200" />
  <S2201 v-else-if="getID == 2201" />
  <S2202 v-else-if="getID == 2202" />
  <S2203 v-else-if="getID == 2203" />
  <S2204 v-else-if="getID == 2204" />
  <S2205 v-else-if="getID == 2205" />
  <S2206 v-else-if="getID == 2206" />
  <S2207 v-else-if="getID == 2207" />
  <S2208 v-else-if="getID == 2208" />
  <S2209 v-else-if="getID == 2209" />
  <!---->
  <S4000 v-else-if="getID == 4000"/>
  <S4009 v-else-if="getID == 4009"/>
  <S4100 v-else-if="getID == 4100"/>
  <S4107 v-else-if="getID == 4107"/>
  <S4202 v-else-if="getID == 4202"/>
  <S4300 v-else-if="getID == 4300"/>
  <div v-else></div>
</template>

<script>
// ! Comp for Recommend section
import S1900 from "@/components/season_1900.vue";
import S1901 from "@/components/season_1901.vue";
import S1902 from "@/components/season_1902.vue";
// ! Comp for 限時賞味 section
import S1000 from "@/components/season_1000.vue";
import S1001 from "@/components/season_1001.vue";
import S1002 from "@/components/season_1002.vue";
import S1003 from "@/components/season_1003.vue";
import S1004 from "@/components/season_1004.vue";
import S1005 from "@/components/season_1005.vue";
import S1006 from "@/components/season_1006.vue";
import S1007 from "@/components/season_1007.vue";
import S1008 from "@/components/season_1008.vue";
import S1009 from "@/components/season_1009.vue";
// ! Comp for 追劇追不完 section
import S1100 from "@/components/season_1100.vue";
import S1101 from "@/components/season_1101.vue";
import S1102 from "@/components/season_1102.vue";
import S1103 from "@/components/season_1103.vue";
import S1104 from "@/components/season_1104.vue";
import S1105 from "@/components/season_1105.vue";
import S1106 from "@/components/season_1106.vue";
import S1107 from "@/components/season_1107.vue";
import S1108 from "@/components/season_1108.vue";
import S1109 from "@/components/season_1109.vue";
// ! Comp for 兒少/生活 section
import S2000 from "@/components/season_2000.vue";
import S2001 from "@/components/season_2001.vue";
import S2002 from "@/components/season_2002.vue";
import S2003 from "@/components/season_2003.vue";
import S2004 from "@/components/season_2004.vue";
import S2005 from "@/components/season_2005.vue";
import S2006 from "@/components/season_2006.vue";
import S2007 from "@/components/season_2007.vue";
import S2008 from "@/components/season_2008.vue";
import S2009 from "@/components/season_2009.vue";
// ! Comp for 追劇30分 section
import S2100 from "@/components/season_2100.vue";
import S2101 from "@/components/season_2101.vue";
import S2102 from "@/components/season_2102.vue";
import S2103 from "@/components/season_2103.vue";
import S2104 from "@/components/season_2104.vue";
import S2105 from "@/components/season_2105.vue";
import S2106 from "@/components/season_2106.vue";
import S2107 from "@/components/season_2107.vue";
import S2108 from "@/components/season_2108.vue";
import S2109 from "@/components/season_2109.vue";
// ! Comp for 藝文/紀錄 section
import S2200 from "@/components/season_2200.vue";
import S2201 from "@/components/season_2201.vue";
import S2202 from "@/components/season_2202.vue";
import S2203 from "@/components/season_2203.vue";
import S2204 from "@/components/season_2204.vue";
import S2205 from "@/components/season_2205.vue";
import S2206 from "@/components/season_2206.vue";
import S2207 from "@/components/season_2207.vue";
import S2208 from "@/components/season_2208.vue";
import S2209 from "@/components/season_2209.vue";
// ! Comp for 自訂 section
import S4000 from "@/components/season_4000.vue";
import S4009 from "@/components/season_4009.vue";
import S4100 from "@/components/season_4100.vue";
import S4107 from "@/components/season_4107.vue";
import S4200 from "@/components/season_4200.vue";
import S4202 from "@/components/season_4202.vue";
import S4300 from "@/components/season_4300.vue";

export default {
  name: "StaticSeason",
  components: {
    S1900,
    S1901,
    S1902,
    S1000,S1001,S1002,S1003,S1004,
    S1005,S1006,S1007,S1008,S1009,
    S1100,S1101,S1102,S1103,S1104,
    S1105,S1106,S1107,S1108,S1109,
    S2000,S2001,S2002,S2003,S2004,
    S2005,S2006,S2007,S2008,S2009,
    S2100,S2101,S2102,S2103,S2104,
    S2105,S2106,S2107,S2108,S2109,
    S2200,S2201,S2202,S2203,S2204,
    S2205,S2206,S2207,S2208,S2209,
    S4000,S4009,
    S4100,S4107,
    S4200,S4202,
    S4300,
  },
  computed: {
    getID: function() {
      return this.$route.params.id;
    }
  },
  created: function() {
    console.log("my id:" + this.$route.params.id);
  },
  data: function() {
    return {};
  },
  methods: {
    // ! item = season.item
    getEpisodeURL: function(item) {
      if (item.url == "javascript:void(0)" || item.url == "#")
        return "/season/" + this.$route.params.id;
      else
        return {
          name: "Episode",
          params: { id: this.getMETA.id, ep: item.id }
        };
    },
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    }
  }
};
</script>

<style scoped></style>>
