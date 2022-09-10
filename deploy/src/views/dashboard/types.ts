 import FlowTendency from "./analysis/components/FlowTendency.vue";
export interface BlockDataItem {
    id: number;
    dataTitle: string;
    dateType: string;
    total: number;
    color: string;
    value: number;
  }

export interface EchartsHeader{
  id:number,
  name:string,
  chooseStatus:Boolean,
  componentName:InstanceType<typeof FlowTendency | null> 
}  