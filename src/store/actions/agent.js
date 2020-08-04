export const getAgents = function (obj) {
  return (dispatch) => {
    console.log(obj);
    dispatch(addAgentsInService(obj));
  };
};

export const resetToRespond = function (id) {
  return (dispatch) => {
    dispatch({ type: 'reset toRespond', payload: id });
  };
};

export const addAgents = function (obj) {
  return (dispatch) => {
    console.log(obj);
    dispatch(addAgentsEntered(obj));
  };
};

export const deleteAgents = function (id) {
  return (dispatch) => {
    console.log(id);
    dispatch({ type: 'delete agent', payload: id });
  };
};

export const agentMessage = function (obj) {
  return (dispatch) => {
    console.log(obj);
    dispatch({ type: 'agent message', payload: obj });
  };
};

export const addAgentsInService = (payload) => {
  return {
    type: 'add agents',
    payload: payload,
  };
};

export const addAgentsEntered = (payload) => {
  return {
    type: 'add new agents',
    payload: payload,
  };
};
