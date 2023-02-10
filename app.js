const app = Vue.createApp({
  data() {
    return {
      moleHoles: [
        { no: 1, mole: false },
        { no: 2, mole: false },
        { no: 3, mole: false },
        { no: 4, mole: false },
        { no: 5, mole: false },
        { no: 6, mole: false },
        { no: 7, mole: false },
        { no: 8, mole: false },
        { no: 9, mole: false },
      ],
      isPlaying: false,
      molePop: null,
      molePopDelay: null,
    };
  },
  methods: {
    mole(hole) {
      hole.mole = !hole.mole;
    },
    popAMole() {
      this.molePop = 500 + Math.random() * 1500;
    },
  },
});

app.mount("#app");
