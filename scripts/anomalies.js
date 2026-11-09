const anomalies = [
{
    id: "phantom",
    name: "Phantom",
    sketch: "images/sketch_phantom.png",
    description: "A shadowy entity that absorbs radio chatter and leaves quiet dead zones across lower frequencies.",
    soundProfile: "Soft whispers, rhythmic tapping, and faint heartbeats on lower bands with total radio silence mid-dial.",
    redEffect: ["710-900"],
    evidence: [
      "Whispering/500-700",
      "Heart Beat/500-700",
      "Tapping/500-700",
      "No Static/710-900",
      "Whispering/710-900",
      "Breathing/910-1100",
      "No Static/910-1100",
      "Whispering/1110-1300",
      "Heart Beat/1110-1300"
    ]
  },
  {
    id: "banshee",
    name: "Banshee",
    sketch: "images/sketch_banshee.png",
    description: "An aggressive screeching anomaly that clings to high frequencies and bursts with violent wind and static.",
    soundProfile: "Ear-piercing screams and intense static spikes across 910-1500 kHz paired with howling wind.",
    redEffect: ["1110-1300", "1310-1500"],
    evidence: [
      "Screams/910-1100",
      "Loud Static/910-1100",
      "Breathing/910-1100",
      "Breathing/1110-1300",
      "Screams/1110-1300",
      "Wind/1110-1300",
      "Loud Static/1310-1500",
      "Screams/1310-1500",
      "Tapping/1310-1500"
    ]
  },
  {
    id: "revenant",
    name: "Revenant",
    sketch: "images/sketch_revenant.png",
    description: "A slow, massive physical presence that emits rhythmic heavy bass pulses and white noise across all bands.",
    soundProfile: "Heavy pulse heartbeat on 500-700 kHz paired with constant tapping and harsh static.",
    redEffect: ["500-700", "910-1100", "1310-1500"],
    evidence: [
      "Heart Beat/500-700",
      "Loud Static/500-700",
      "Tapping/500-700",
      "Loud Static/710-900",
      "Breathing/710-900",
      "Heart Beat/910-1100",
      "Loud Static/1110-1300",
      "Loud Static/1310-1500",
      "Heart Beat/1310-1500"
    ]
  },
  {
    id: "shade",
    name: "Shade",
    sketch: "images/sketch_shade.png",
    description: "A deceptive visual spirit that manipulates light and creates sudden drops in static accompanied by eerie wind.",
    soundProfile: "Faint wind and tapping on high bands with occasional silent drops and low whispers.",
    redEffect: ["710-900", "1110-1300", "1310-1500"],
    evidence: [
      "Wind/500-700",
      "No Static/710-900",
      "Tapping/710-900",
      "Whispering/910-1100",
      "Wind/1110-1300",
      "Tapping/1110-1300",
      "Wind/1310-1500",
      "No Static/1310-1500"
    ]
  },
  {
    id: "specter",
    name: "Specter",
    sketch: "images/sketch_specter.png",
    description: "An elusive drift anomaly that shifts rapidly between low whispers, wind gusts, and sudden screech bursts.",
    soundProfile: "Faint whispers on lower bands transitioning into howling wind and sudden shrill squeals mid-dial.",
    redEffect: ["1110-1300"],
    evidence: [
      "Whispering/500-700",
      "Loud Static/500-700",
      "Breathing/710-900",
      "Wind/710-900",
      "No Static/910-1100",
      "Screams/910-1100",
      "Whispering/1110-1300",
      "Loud Static/1310-1500"
    ]
  },
  {
    id: "wraith",
    name: "Wraith",
    sketch: "images/sketch_wraith.png",
    description: "An airborne presence that glides across frequencies, causing erratic static blackouts and heavy rasps.",
    soundProfile: "Heavy breathing accompanied by pitch black dead-zones, tapping, and high-frequency whispers.",
    redEffect: ["500-700", "1310-1500"],
    evidence: [
      "Breathing/500-700",
      "Screams/710-900",
      "No Static/910-1100",
      "Whispering/910-1100",
      "Breathing/1110-1300",
      "Screams/1110-1300",
      "No Static/1310-1500",
      "Whispering/1310-1500",
      "Tapping/1310-1500"
    ]
  },
  {
    id: "poltergeist",
    name: "Poltergeist",
    sketch: "images/sketch_poltergeist.png",
    description: "A chaotic entity that causes intense radio static interference and loud mechanical tapping.",
    soundProfile: "Violent audio screeching interspersed with sharp tapping patterns across mid-to-high frequencies.",
    redEffect: ["710-900", "910-1100", "1110-1300", "1310-1500"],
    evidence: [
      "Loud Static/500-700",
      "Tapping/500-700",
      "Screams/710-900",
      "Loud Static/710-900",
      "Tapping/910-1100",
      "Wind/910-1100",
      "Loud Static/1110-1300",
      "Screams/1310-1500"
    ]
  },
  {
    id: "demon",
    name: "Demon",
    sketch: "images/sketch_demon.png",
    description: "A malicious entity characterized by intense heartbeats and violent audio surges across almost all frequencies.",
    soundProfile: "Violent low thumps on 500-700 kHz accompanied by howling wind and shrieks.",
    redEffect: ["500-700", "710-900", "910-1100", "1110-1300", "1310-1500"],
    evidence: [
      "Heart Beat/500-700",
      "Screams/500-700",
      "Wind/500-700",
      "Heart Beat/710-900",
      "Loud Static/710-900",
      "Screams/910-1100",
      "Tapping/910-1100",
      "Heart Beat/1110-1300",
      "Screams/1310-1500"
    ]
  },
  {
    id: "siren",
    name: "Siren",
    sketch: "images/sketch_siren.png",
    description: "A predatory entity that uses haunting wind noise and seductive whispers to trick operators into lingering.",
    soundProfile: "Repeated wind gusts and whispering loops on 710-1100 kHz backed by high-pitched screams.",
    redEffect: ["910-1100", "1310-1500"],
    evidence: [
      "Wind/500-700",
      "Whispering/710-900",
      "Wind/710-900",
      "Screams/910-1100",
      "Tapping/910-1100",
      "Whispering/1110-1300",
      "Wind/1110-1300",
      "Screams/1310-1500"
    ]
  },
  {
    id: "mimic",
    name: "Mimic",
    sketch: "images/sketch_mimic.png",
    description: "A morphing anomaly that copies the signal signatures of other monsters across multiple channels.",
    soundProfile: "Unstable combination of tapping, heavy static, wind, and rapid voice pitch shifts.",
    redEffect: ["500-700", "910-1100", "1110-1300", "1310-1500"],
    evidence: [
      "Whispering/500-700",
      "Tapping/710-900",
      "Breathing/710-900",
      "Screams/910-1100",
      "Loud Static/910-1100",
      "Wind/1110-1300",
      "Whispering/1110-1300",
      "Breathing/1310-1500",
      "Tapping/1310-1500"
    ]
  },
  {
    id: "ghoul",
    name: "Ghoul",
    sketch: "images/sketch_ghoul.png",
    description: "A grounded decay spirit that produces low guttural breathing and persistent tapping pulses.",
    soundProfile: "Deep breathing patterns mixed with heartbeat thumps and rhythmic tapping on low bands.",
    redEffect: ["500-700", "1110-1300"],
    evidence: [
      "Breathing/500-700",
      "Heart Beat/500-700",
      "Tapping/500-700",
      "Breathing/710-900",
      "Heart Beat/710-900",
      "Loud Static/910-1100",
      "Wind/1110-1300",
      "Breathing/1310-1500"
    ]
  },
  {
    id: "voidwalker",
    name: "Voidwalker",
    sketch: "images/sketch_voidwalker.png",
    description: "A cosmic anomaly that completely cuts out static across almost every frequency it occupies.",
    soundProfile: "Eerie complete dead-air silence punctuated only by distant wind and heartbeats.",
    redEffect: ["710-900", "1310-1500"],
    evidence: [
      "No Static/500-700",
      "Heart Beat/500-700",
      "No Static/710-900",
      "Wind/710-900",
      "No Static/910-1100",
      "Heart Beat/910-1100",
      "No Static/1110-1300",
      "Tapping/1310-1500",
      "No Static/1310-1500"
    ]
  }
]