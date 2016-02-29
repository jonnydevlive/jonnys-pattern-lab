import {Observable} from 'rxjs/Observable';
import {AgentList, Agent} from './agent-list';

describe('AgentList', () => {
  let callback:jasmine.Spy;
  
  beforeEach(() => {
    callback = jasmine.createSpy('callback');
  });
  
  describe('loadAgents', () => {
    it('gets the list of agents based on the deity the serve', () => {
      testForAgentLoad(1, [{name: 'Claire'}, {name: 'Vincent'}]);
      testForAgentLoad(2, [{name: 'Solarra'}, {name: 'Lunarra'}]);
      testForAgentLoad(3, [{name: 'Victoria'}, {name:'Arthur'}]);
    });

    function testForAgentLoad(id:number, expectedAgents:Agent[]){
      let agentList:AgentList = new AgentList(id);
      
      let agentsSubscription = agentList.agents$.subscribe(
        agents => callback(agents)
      )
      
      agentList.loadAgents();
      expect(callback).toHaveBeenCalledWith(expectedAgents);
      
      agentsSubscription.unsubscribe();
    }  
  });
  
  
  describe('addAgent', () => {
    it('adds an agent to the list', () => {
      let agentList:AgentList = new AgentList(2);
      
      let agentsSubscription = agentList.agents$.subscribe(
        agents => callback(agents)
      )
      
      agentList.loadAgents();
      agentList.addAgent({name: 'Terrarra'});
      expect(callback).toHaveBeenCalledWith([{name: 'Solarra'}, {name: 'Lunarra'}, {name:'Terrarra'}]);
      
      agentsSubscription.unsubscribe();
    });
  });
  
  describe('removeAgent', () => {
    it('removes an agent from the list', () => {
      let agentList:AgentList = new AgentList(2);
      
      let agentsSubscription = agentList.agents$.subscribe(
        agents => callback(agents)
      )
      
      agentList.loadAgents();
      agentList.removeAgent('Solarra');
      expect(callback).toHaveBeenCalledWith([{name: 'Lunarra'}]);
      
      agentsSubscription.unsubscribe();  
    });
  });
  
});