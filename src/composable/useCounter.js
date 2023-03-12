import { useStore } from "vuex";

function useCounter() {

  const store = useStore();

  function increment() {
    store.dispatch("increment", 1);
  }
    
  function decrement() {
    store.dispatch("decrement", 1);
  }
  function reset() {
      store.dispatch("reset")
    }

  return {
     increment, decrement, reset};
}
  export default useCounter;
