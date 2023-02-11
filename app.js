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
      moleToPop: null,
      molesWhacked: 0,
      mole: "IMG/Mole.png",
      molehole: "IMG/Hole.png",
      playTimeLeft: 30,
      gameOver: false,
      pop: new Audio("SOUNDS/molePop.mp3")
    };
  },
  methods: {
    play() {
      this.molesWhacked = 0;
      this.isPlaying = !this.isPlaying;
      this.gameOver = false;
      this.playTimeLeft = 30;
      this.popAMole();
      this.startCountdown();
    },

    popAMole() {
      this.moleToPop = Math.floor(Math.random() * 9);
      this.molePop = 500 + Math.random() * 1500;
      setTimeout(() => {
        this.moleHoles[this.moleToPop].mole = true;
        this.hideAMole(this.moleToPop);
        this.pop.play()
        if (this.isPlaying) {
          this.popAMole();
        }
      }, this.molePop);

      console.log(this.moleToPop);
      console.log(this.molePop);
    },
    hideAMole(moleNo) {
      this.molePopDelay = 200 + Math.random() * 1000;
      setTimeout(() => {
        this.moleHoles[moleNo].mole = false;
      }, this.molePopDelay);
    },
    whackMole(hole) {
      if (hole.mole) {
        this.molesWhacked++;
        hole.mole = false;
        console.log(this.molesWhaced);
      } else console.log("MISS");
    },
    moleInHole(hole) {
      if (hole.mole) {
        return this.mole;
      } else {
        return this.molehole;
      }
    },
    startCountdown() {
      if (this.isPlaying) {
        setTimeout(() => {
          this.playTimeLeft--;
          this.startCountdown();
        }, 1000);
      }
      if (this.playTimeLeft < 0) {
        this.isPlaying = false;
        this.gameOver = true;
      }
    },
  },
  mounted() {
    console.log("Mounted");
  },
});

app.mount("#app");
