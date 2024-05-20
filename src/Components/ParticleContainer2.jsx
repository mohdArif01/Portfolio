import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticlesContainer = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#ffffff",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    number: {
                      value: 6,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    color: {
                      value: "#1b1e34"
                    },
                    shape: {
                      type: "polygon",
                      stroke: {
                        width: 0,
                        color: "#000"
                      },
                      polygon: {
                        nb_sides: 6
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.3,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 4,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 150,
                      random: false,
                      anim: {
                        enable: true,
                        speed: 4,
                        size_min: 40,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: false,
                      distance: 200,
                      color: "#ffffff",
                      opacity: 1,
                      width: 2
                    },
                    move: {
                      enable: true,
                      speed: 5,
                      direction: "up",
                      random: true,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "grab"
                      },
                      onclick: {
                        enable: false,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 0.5
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 60,
                        duration: 2,
                        opacity: 5,
                        speed: 0.3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                  retina_detect: true
            }}
        />
    );
};

export default ParticlesContainer;