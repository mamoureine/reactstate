import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Alex Morgan',
        bio: 'A curious creative who enjoys turning thoughtful ideas into useful digital experiences.',
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
        profession: 'Product Designer',
      },
      shows: false,
      elapsedSeconds: 0,
    };

    this.mountedAt = null;
    this.intervalId = null;
  }

  componentDidMount() {
    this.mountedAt = Date.now();
    this.intervalId = window.setInterval(() => {
      this.setState({
        elapsedSeconds: Math.floor((Date.now() - this.mountedAt) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState(({ shows }) => ({ shows: !shows }));
  };

  render() {
    const { person, shows, elapsedSeconds } = this.state;
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');

    return (
      <main className="page-shell">
        <section className="profile-panel" aria-labelledby="page-title">
          <div className="panel-content">
            <p className="eyebrow">A little introduction</p>
            <h1 id="page-title">People make the story.</h1>
            <p className="intro">
              Get to know the person behind the work.
            </p>

            <button
              className="toggle-button"
              type="button"
              onClick={this.toggleProfile}
              aria-expanded={shows}
              aria-controls="person-profile"
            >
              {shows ? 'Hide profile' : 'Show profile'}
              <span aria-hidden="true">{shows ? '−' : '+'}</span>
            </button>

            {shows && (
              <article className="person-card" id="person-profile">
                <img
                  className="person-photo"
                  src={person.imgSrc}
                  alt={person.fullName}
                />
                <div className="person-details">
                  <p className="person-profession">{person.profession}</p>
                  <h2>{person.fullName}</h2>
                  <p className="person-bio">{person.bio}</p>
                </div>
              </article>
            )}

            <div className="mount-timer" role="status" aria-live="off">
              <span className="timer-indicator" aria-hidden="true" />
              <span className="timer-label">Time since this component mounted</span>
              <span className="timer-value">
                {minutes}m {seconds}s
              </span>
            </div>
          </div>
          <div className="panel-decoration" aria-hidden="true">
            <span className="decoration-orbit orbit-one" />
            <span className="decoration-orbit orbit-two" />
            <span className="decoration-dot" />
          </div>
        </section>
        <footer className="page-footer">A profile, one detail at a time.</footer>
      </main>
    );
  }
}

export default App;
