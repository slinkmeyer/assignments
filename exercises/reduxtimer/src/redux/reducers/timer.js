const { createStore } = Redux;

const initialState = {
  isOn: false,
  time: 0
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...initialState,
        isOn: true,
        offset: action.offset,
      };

    case 'STOP_TIMER':
      return {
        isOn: false,
        time: state.time
      };

    case 'LAP_TIMER':
      return {
        ...state,
        time: state.time + (action.time - state.offset),
        offset: action.time
      };

    default:
      return state;
  }
}

const store = createStore(timer);

class Timer extends React.Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    store.dispatch({
      type: 'START_TIMER',
      offset: Date.now(),
    });
  }

  stop() {
    store.dispatch({
      type: 'STOP_TIMER'
    });
  }

  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time;
      }
      return time;
    }

    time = new Date(time);
    let m = pad(time.getMinutes().toString(), 2);
    let s = pad(time.getSeconds().toString(), 2);
    let ms = pad(time.getMilliseconds().toString(), 3);

    return `${m} : ${s} . ${ms}`;
  }

  render() {
    return (
      <div>
        <h1>Time: {this.format(this.props.time)}</h1>
        <button onClick={this.props.isOn ? this.stop : this.start}>
          { this.props.isOn ? 'Stop' : 'Start' }
        </button>
      </div>
    );
  }
}


const render = () => {
  ReactDOM.render(
    <Timer
      time={store.getState().time}
      isOn={store.getState().isOn}
      interval={store.getState().interval}
    />,
    document.getElementById('app')
  );
}

store.subscribe(render);

var interval = null;
store.subscribe(() => {
    if (store.getState().isOn && interval === null) {
      interval = setInterval(() => {
        store.dispatch({
          type: 'LAP_TIMER',
          time: Date.now()
        });
      });
    }
    if (!store.getState().isOn && interval !== null) {
      clearInterval(interval);
      interval = null;
    }
});

render();

export default timer;
