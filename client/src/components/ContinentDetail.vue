<template lang="html">
  <div v-if='continent'>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1 class="name">{{this.continent.display_name}}</h1>
            <ul v-for="animal in this.continent.animals">
              <img @click="selectAnimal(animal)" :src="animal.image" height="150em" width="150em" class="circularImg" >
            </ul>
            <div v-if="selectedAnimal !== ''">
              <passport :selectedAnimal="selectedAnimal" :favouriteAnimals="favouriteAnimals"></passport>
              <div v-if="answer_class === 'correct'">
                <font-awesome-icon id="tick" icon="check-circle" color="green" size="6x"/>
                <div id="answer-fact">
                  <p>Science Fact:</p>
                  <animal-fact :selectedAnimal="selectedAnimal"></animal-fact>
                </div>
              </div>
              <div v-if="answer_class === 'incorrect'">
                <font-awesome-icon id="cross" icon="times-circle" color="red" size="6x"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div >
      <button @click="isOpen = !isOpen, noSelection()" type="button" name="button" :class="continent.name" style="font-size: 4em; background: none; color: #274769; border: none;"><font-awesome-icon icon="paw" class="pawH"/></i></button>
    </button>
  </div>
</div>
</template>

<script>
import Passport from "./Passport.vue"
import AnimalFact from "./AnimalFact.vue"
import {eventBus} from "../main.js"

export default {
  name: 'continent-detail',
  props: ['continent', 'favouriteAnimals'],
  data() {
    return {
      isOpen: false,
      selectedAnimal: "",
      answer_class: "hidden"
    }
  },
  methods: {
    shuffle(array){
      for( let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    selectAnimal(animal){
      this.answer_class = "hidden";
      this.selectedAnimal = animal;
      this.shuffle(animal.answers)
    },
    noSelection(){
      this.answer_class = null;
      this.selectedAnimal = ""
    }
  },
  mounted(){
    eventBus.$on("check-answer", answer => {
      this.answer_class = answer
    })
  },
  components: {
    "passport": Passport,
    "animal-fact": AnimalFact
  }
}
</script>

<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

.pawH:hover {
  color: #DAF2CB;
  cursor: pointer;
}

.result-of-answer {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 0.5em;
}

#passport-section {
  width: 700px;
  margin: 20px auto 0;
  background: url('../assets/istockphoto.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 15px;
}

.circularImg{
  border-radius: 50%;
  display: block;
  float: left;
  margin: 20px;
  padding-left: 0px;
  object-fit: cover;
  cursor: pointer;
  filter: drop-shadow(1px 2px 3px #808788);
  opacity: 80%;
}

.circularImg:hover {
  opacity: 100%;
}

.modal {
  width: 1000px;
  max-height: 250px;
  margin: 0px auto;
  padding: 20px;
  background-color: #F5F7F7;
  border-radius: 10px;
  border-style: solid 1px;
  border-color: black;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  position: fixed;
  top: 0px;

}
.fadeIn-enter {
  opacity: 0;
}
.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}
.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  background-color: dodgerblue;
  color: white;
  font-size: 1.1rem;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

h1 {
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  margin-top: 5px;
  margin-bottom: 0px;
}

#tick {
  position: relative;
  left: 300px;
  top: -480px;
}

#cross {
  position: relative;
  left: 300px;
  top: -480px;
}

#answer-fact {
  font-size: 25px;
  position: relative;
  top: -450px;
  background-color: #F5F7F7;
  border: 2px solid;
  width: 47%;
  height: 330px;
  border-radius: 10px;
  left: 20px;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
}

.SouthAmerica {
  position: absolute;
  left: 30%;
  top: 600%;

}
.NorthAmerica {
  position: absolute;
  left: 19%;
  top: 300%;
}

.Europe {
  position: absolute;
  left: 48%;
  top: 280%;
}

.Oceans {
  position: absolute;
  left: 65%;
  top: 700%;
}

.Africa {
  position: absolute;
  left: 51%;
  top: 500%;
}

.Asia {
  position: absolute;
  left: 67%;
  top: 286%;
}

.Antarctica {
  position: absolute;
  left: 45%;
  top: 890%;
}

.Australia {
  position: absolute;
  left: 80%;
  top: 675%;
}


</style>
