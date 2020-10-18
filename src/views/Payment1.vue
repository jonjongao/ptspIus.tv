<template>
<main _ngcontent-c1="" class="payment_flow_page">
  <div _ngcontent-c1="" class="container">
    <div _ngcontent-c1="" class="row justify-content-center">
      <div _ngcontent-c1="" class="col-md-6 col-10">
        <ul _ngcontent-c1="" class="payment_steps">
          <li _ngcontent-c1="" class="step_01 active"></li>
          <li _ngcontent-c1="" class="step_02"></li>
          <li _ngcontent-c1="" class="step_03"></li>
          <li _ngcontent-c1="" class="step_04"></li>
          <li _ngcontent-c1="" class="step_05"></li>
        </ul>
      </div>
    </div>
    <div _ngcontent-c1="" class="row justify-content-center">
      <div _ngcontent-c1="" class="col-12">
        <h3 _ngcontent-c1="">最新方案　敬請期待！</h3>
      </div>
    </div>
    <div _ngcontent-c1="" class="row">
      <div _ngcontent-c1="" class="col-12">
        <div _ngcontent-c1="" class="payment_plan justify-content-center">
          <!---->
          <div _ngcontent-c1="" class="plan-card">
            <!--<span _ngcontent-c1=""></span>-->
            <p _ngcontent-c1="" class="card_subtitle">單點節目</p>
            <p _ngcontent-c1="" class="card_title">
              （真話）：藏在原子筆裡的涼菸
            </p>
            <p _ngcontent-c1="" class="card_description">
              如果是我，我會說真話，因為我也不想讓他誤會太多，但新同學總是要交個朋友。
            </p>
            <router-link v-on:click.native="setUnlock(1)" to="/" tag="button" _ngcontent-c1="" class="btn btn-outline-primary">
              購買此方案 1984元
            </router-link>
          </div>
          <div _ngcontent-c1="" class="plan-card">
            <!--<span _ngcontent-c1=""></span>-->
            <p _ngcontent-c1="" class="card_subtitle">單點節目</p>
            <p _ngcontent-c1="" class="card_title">
              （謊話）：藏在鑰匙環裡的涼菸
            </p>
            <p _ngcontent-c1="" class="card_description">
              如果是我，我會說謊話，因為我媽不知道我抽菸，我也不會讓他知道我抽菸。
            </p>
            <router-link v-on:click.native="setUnlock(2)" to="/" tag="button" _ngcontent-c1="" class="btn btn-outline-primary">
              購買此方案 1984元
            </router-link>
          </div>
          <div _ngcontent-c1="" class="plan-card">
            <!--<span _ngcontent-c1=""></span>-->
            <p _ngcontent-c1="" class="card_subtitle">單點節目</p>
            <p _ngcontent-c1="" class="card_title">
              （半真半假）：藏在抽屜裡的涼菸
            </p>
            <p _ngcontent-c1="" class="card_description">
              有時候真話和謊話其實聽起來並沒有差別，我只希望他也會也抽菸，有時候，我多想跟她分享我的一切
            </p>
            <router-link v-on:click.native="setUnlock(3)" to="/" tag="button" _ngcontent-c1="" class="btn btn-outline-primary">
              購買此方案 1984元
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div _ngcontent-c1="" class="row justify-content-center">
      <div _ngcontent-c1="" class="col-md-6 plan_notice">
        <p _ngcontent-c1="">
          當選擇繼續，即表示你同意
          <a _ngcontent-c1="" routerlink="/terms" href="" class="disabled_href"
            >方案使用規則與條款</a
          >
        </p>
      </div>
    </div>
  </div>

  <div
    _ngcontent-c1=""
    aria-hidden="true"
    aria-labelledby="popupModalLabel"
    class="modal fade"
    id="popupModal"
    role="dialog"
    tabindex="-1"
  >
    <div _ngcontent-c1="" class="modal-dialog" role="document">
      <div _ngcontent-c1="" class="modal-content">
        <div _ngcontent-c1="" class="modal-header">
          <h5 _ngcontent-c1="" class="modal-title" id="popupModalLabel">
            標題
          </h5>
          <button
            _ngcontent-c1=""
            aria-label="Close"
            class="close"
            data-dismiss="modal"
            type="button"
          >
            <span _ngcontent-c1="" aria-hidden="true"></span>
          </button>
        </div>
        <div _ngcontent-c1="" class="modal-body">
          <p _ngcontent-c1="">內容</p>
        </div>
        <div _ngcontent-c1="" class="modal-footer">
          <a _ngcontent-c1="" class="btn btn-outline-primary">確定</a>
          <a
            _ngcontent-c1=""
            class="btn btn-outline-primary"
            data-dismiss="modal"
            >取消</a
          >
        </div>
      </div>
    </div>
  </div>
  <app-remind-update-email-dialog _ngcontent-c1="" _nghost-c3="">
    <div
      _ngcontent-c3=""
      aria-hidden="true"
      aria-labelledby="emailValidPopupModalLabel"
      class="modal fade"
      id="emailValidPopupModal"
      role="dialog"
      tabindex="-1"
    >
      <div _ngcontent-c3="" class="modal-dialog" role="document">
        <div _ngcontent-c3="" class="modal-content">
          <div _ngcontent-c3="" class="modal-header">
            <h5
              _ngcontent-c3=""
              class="modal-title"
              id="emailValidPopupModalLabel"
            >
              尚未驗證
            </h5>
            <button
              _ngcontent-c3=""
              aria-label="Close"
              class="close"
              data-dismiss="modal"
              type="button"
            >
              <span _ngcontent-c3="" aria-hidden="true"></span>
            </button>
          </div>
          <div _ngcontent-c3="" class="modal-body">
            <p _ngcontent-c3="">
              請進行 Email
              認證，按下『確定』後，將幫您轉至『個人資料』頁，方可更改
              Email，更改完畢後，系統將傳送一封認證信至您的信箱，再請您進行後續認證．
            </p>
          </div>
          <div _ngcontent-c3="" class="modal-footer">
            <button
              _ngcontent-c3=""
              class="btn btn-outline-primary"
              data-dismiss="modal"
              tabindex="0"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </app-remind-update-email-dialog>
</main>

</template>

<script>
export default {
  name: "Payment1",
  components: {},
  data: function () {
    return {};
  },
  methods:{
    setUnlock:function(value){
      this.$store.commit('setUnlock', [value, true])
      this.$bus.$emit('saveUnlock', value);
    }
  }
};
</script>

<style scoped>
</style>>