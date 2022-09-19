//import { Exercise, State } from '@/model/exercise';
//import {reactive, toRefs } from 'vue';
import {Exercise} from '@/model/exercise';
import ExercisesVue from '@/views/Exercises.vue';
import {defineStore} from 'pinia';
import {ref} from 'vue';

/*const state = reactive<State>({
    exercises: [],
});
  
 let initialized=false;
export default function useExercise(){
    const load=()=>{
        if(!initialized){
            state.exercises = [
                { name: 'Harjutus 1', description: 'Kirjeldus 1' },
                { name: 'Harjutus 2', description: 'Kirjeldus 2' },
                { name: 'Harjutus 3', description: 'Kirjeldus 3' },
                { name: 'Harjutus 4', description: 'Kirjeldus 4' },
            ];
            initialized=true;
        }
    };
    
    const addExercise = (exercise: Exercise) => {
        state.exercises.push(exercise);
      };
    
    return {...toRefs(state), load, addExercise};

} */

export const useExercisesStore = defineStore('exercisesStore', () => {
    const exercises = ref<Exercise[]>([
      { name: 'Harjutus 1', description: 'Kirjeldus 1' },
      { name: 'Harjutus 2', description: 'Kirjeldus 2' },
      { name: 'Harjutus 3', description: 'Kirjeldus 3' },
      { name: 'Harjutus 4', description: 'Kirjeldus 4' },
    ]);  

const addExercise=(exercise: Exercise)=>{
    exercises.value.push(exercise);
};

return {exercises, addExercise};
});