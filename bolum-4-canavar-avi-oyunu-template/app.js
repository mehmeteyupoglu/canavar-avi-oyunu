new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      var point = Math.ceil(Math.random() * 10);
      this.monster_attack();
      this.monster_heal -= point;
    },
    special_attack: function () {
      var point = Math.ceil(Math.random() * 25);
      this.monster_attack();
      this.monster_heal -= point;
    },
    heal_up: function () {
      var point = Math.ceil(Math.random() * 15);
      this.monster_attack();
      this.player_heal += point;
    },
    give_up: function () {
      this.player_heal = 0;
    },
    monster_attack: function () {
      var point = Math.ceil(Math.random() * 15);
      this.player_heal -= point;
    },
  },
  watch: {
    player_heal(value) {
      if (value <= 0) {
        this.player_heal = 0;
        if (confirm("Oyunu kaybettin. Tekrar denemek ister misin?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
        }
      } else if (value >= 100) {
        this.player_heal = 100;
      }
    },
    monster_heal(value) {
      if (value <= 0) {
        this.monster_heal = 0;
        if (confirm("Oyunu kazandın. Tekrar denemek ister misin?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
        }
      } else if (value >= 100) {
        this.monster_heal = 100;
      }
    },
  },
});
