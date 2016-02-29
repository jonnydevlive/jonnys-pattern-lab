import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class AgentList{
  agents$:Observable<any[]>;
  
  private _agentsUpdatedSource:Subject<any[]>;
  private _deityId:number;
  private _agents: Agent[];
  
  private _agentsByDeity:{} = {
    1: [{name: 'Claire'}, {name: 'Vincent'}],
    2: [{name: 'Solarra'}, {name: 'Lunarra'}],
    3: [{name: 'Victoria'}, {name:'Arthur'}]
  }

  constructor(deityId:number){
    this._deityId = deityId;
    this._agentsUpdatedSource = new Subject<any[]>();
    this.agents$ = this._agentsUpdatedSource.asObservable();
  }
  
  loadAgents():void{
    this._agents = this._agentsByDeity[this._deityId];
    this._agentsUpdatedSource.next(this._agents);
  }
  
  addAgent(agent:Agent):void{
    this._agents.push(agent);
    this._agentsUpdatedSource.next(this._agents);
  }
  
  removeAgent(agentName:string):void{
    let index:number = 0;
    this._agents;
    
    while(this._agents[index].name !== agentName && index < this._agents.length){
      index++;
    }
    
    if(index < this._agents.length){
      this._agents.splice(index, 1);
    }
    
    this._agentsUpdatedSource.next(this._agents);
  }
}

export interface Agent{
  name: string;
}