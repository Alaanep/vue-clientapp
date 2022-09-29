<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <form class="max-w-md w-full space-y-8">
            <div class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="martiklinr">Martikli Nr</label>
                        <input
                            id="martiklinr"
                            name="martiklinr"
                            v-model="exercise.martiklinr"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Martikli Nr"
                        />
                    </div>
                    <div>
                        <label for="eesnimi">Eesnimi</label>
                        <input
                            id="eesnimi"
                            name="eesnimi"
                            v-model="exercise.eesnimi"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Eesnimi"
                        />
                    </div>
                    <div>
                        <label for="perenimi">Perenimi</label>
                        <input
                            id="perenimi"
                            name="perenimi"
                            v-model="exercise.perenimi"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Perenimi"
                        />
                    </div>
                    <div>
                        <label for="staatus">Staatus</label>
                        <select
                            id="staatus"
                            name="staatus"
                            v-model="exercise.staatus"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Staatus"
                        >
                        <option selected value="Aktiivne">Aktiivne</option>
                        <option value="Mitte Aktiivne">Mitte Aktiivne</option>
                        </select>
                    </div>
                    <div>
                        <label for="sugu">Sugu</label>
                        <select
                            id="sugu"
                            name="sugu"
                            v-model="exercise.sugu"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        >
                        <option selected value="Naine">Naine</option>
                        <option value="Mees">Mees</option>
                        </select>
                    </div>
                    <div>
                        <label for="date">Sugu</label>
                        <input
                            type="Date"
                            id="date"
                            name="date"
                            v-model="exercise.kuupaev"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="date"
                        />
                    </div>

                </div>
                <div>
                    <button
                        @click.prevent="submitForm" 
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">            
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                        Lisa Tudeng
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { Tudeng } from '@/model/tudeng';
    //import useExercise from '@/stores/ExercisesStore';
    //import { onMounted, ref, Ref } from 'vue';
    import { tudengiteStore } from '@/stores/tudengiteStore';
import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import { TransformStreamDefaultController } from 'node:stream/web';
    import { ref, Ref } from 'vue';

    import { useRouter } from 'vue-router';
    
    const exercise: Ref<Tudeng>=ref({martiklinr: '', eesnimi: '', perenimi: '', staatus: '', sugu: '', kuupaev: new Date, vanus: 0});

    const {lisaTudeng}=tudengiteStore();
    const router=useRouter();

    const submitForm=()=>{
        var today=new Date();
        var birthday= new Date(exercise.value.kuupaev);
        let timeDiff =Date.now()-birthday.getTime();
        var vanus = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
        exercise.value.vanus=vanus;
        console.log(vanus);
        lisaTudeng({...exercise.value});
        exercise.value.martiklinr='';
        exercise.value.eesnimi='';
        exercise.value.perenimi='';
        router.push({name: 'Tudengid'});
    };

    
    
</script>