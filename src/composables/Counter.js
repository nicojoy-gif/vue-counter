import { ref } from 'vue';
import { useStore } from 'vuex';
export default function useCounter() {
    const count = ref(0)
    const store = useStore()

    function increment() {
        store.dispatch('increment', 1)
    }
    function decrement() {
        count.value--
        
    }
    function reset() {
        count.value = 0
    }
    return {count, increment, decrement, reset}
}