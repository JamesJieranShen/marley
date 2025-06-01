// Use this example job configuration file as a starting point for your own
// files.
{

  // Pure 40Ar target
  target: {
    nuclides: [ 1000080160 ],
    atom_fractions: [ 1.0 ],
  },

  // Simulate CC ve scattering on 40Ar
  reactions: [ "16OES.react" ],

  // Neutrino source specification
  source: {
    type: "monoenergetic",
    neutrino: "ve",       // The source produces electron neutrinos
    energy: 10,
  },

  // Incident neutrino direction 3-vector
  direction: { x: 0.0, y: 0.0, z: 1.0 },

  // Settings for marley command-line executable
  executable_settings: {

    // The number of events to generate
    events: 10000,

    // Event output configuration
    output: [ 
      { file: "o16_es.root", format: "root", mode: "overwrite" },
      { file: "o16_es.hepevt", format: "hepevt", mode: "overwrite" }
    ],

  },
}
