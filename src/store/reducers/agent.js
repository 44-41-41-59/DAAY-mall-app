let initialState = {
  agents: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let agents;
  switch (type) {
    case 'add agents':
      return { ...state, agents: payload };
    case 'reset toRespond':
      agents = state.agents;
      agents = agents.map((agent) => {
        if (agent._id === payload) agent.toRespond = 0;
        return agent;
      });
      return { ...state, agents };
    case 'add new agents':
      agents = state.agents;
      agents.push({ ...payload, messages: [], toRespond: 0 });
      return { ...state, agents };
    case 'delete agent':
      agents = state.agents;
      agents = agents.filter((agent) => agent._id !== payload);
      return { ...state, agents };

    case 'agent message':
      console.log('hello for redu');
      agents = state.agents;
      agents = agents.map((agent) => {
        let id;
        if (payload.id) id = payload.id;
        else id = payload._id;

        if (agent._id === id) {
          console.log(payload.toRespond, 'bwbwfdsfds');
          if (!payload.toRespond) agent.toRespond = agent.toRespond + 1;
          agent.messages.push(payload);
          agent.message = payload.message;
        }
        return agent;
      });
      return { ...state, agents };
    default:
      return state;
  }
};
