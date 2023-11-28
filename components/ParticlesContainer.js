"use client";
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';


const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return (
    <Particles
      className='w-full h-full absolute z-0'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullscreen: { enable: false },
        background: {
          color: {
            value: ''
          },
        },
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 100
            },
            repulse: {
              distance: 100,
              duration: 0.8,
            }
          }
        },
        particles: {
          color: {
            value: '#F8F100',
          },
          links: {
            color: '#4169E1',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'edge'
          },
          size: {
            value: {min: 1, max: 5}
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
