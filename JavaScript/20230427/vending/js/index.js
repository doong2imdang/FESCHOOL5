import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachinEvents from "./classes/vendingMachineEvents.js";

const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachinEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await  // 마치 async함수가 있는 것 처럼 동작
await colaGenerator.setup();
vendingMachineEvents.bindEvent();
