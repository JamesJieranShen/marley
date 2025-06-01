// Use this example job configuration file as a starting point for your own
// files.
{

  // Pure 40Ar target
  target: {
    nuclides: [ 1000080160 ],
    atom_fractions: [ 1.0 ],
  },

  // Simulate CC ve scattering on 16O
  reactions: [ "ve16OCC_Haxton1990.react" ],

  // Neutrino source specification
  source: {
    type: "dar",          // muon decay at rest spectrum, such as SNS
    neutrino: "ve",       // The source produces electron neutrinos
  },

  // Incident neutrino direction 3-vector
  direction: { x: 1.0, y: 0.0, z: 0.0 },

  // Settings for marley command-line executable
  executable_settings: {

    // The number of events to generate
    events: 10000,

    // Event output configuration
    output: [ 
      { file: "o16CC.root", format: "root", mode: "overwrite" },
      { file: "o16CC.hepevt", format: "hepevt", mode: "overwrite" }
    ],

  },
}
