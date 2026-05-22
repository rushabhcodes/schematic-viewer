import { SchematicViewer } from "lib/components/SchematicViewer"
import { renderToCircuitJson } from "lib/dev/render-to-circuit-json"

const circuitJson = renderToCircuitJson(
  <board width="120mm" height="130mm" routingDisabled>
    <schematictext schX={0} schY={11} text="Schematic Symbol Size Gallery" />
    <schematictext
      schX={0}
      schY={10}
      text="Built-in symbols placed side by side for visual comparison"
      fontSize={0.35}
    />

    <resistor name="R1" resistance="1k" schX={-15} schY={5} />
    <schematictext schX={-15} schY={3.6} text="resistor" fontSize={0.35} />

    <capacitor name="C1" capacitance="100nF" schX={-9} schY={5} />
    <schematictext schX={-9} schY={3.6} text="capacitor" fontSize={0.35} />

    <capacitor name="C2" capacitance="10uF" polarized schX={-3} schY={5} />
    <schematictext schX={-3} schY={3.6} text="polarized cap" fontSize={0.35} />

    <inductor name="L1" inductance="10uH" schX={3} schY={5} />
    <schematictext schX={3} schY={3.6} text="inductor" fontSize={0.35} />

    <diode name="D1" schX={9} schY={5} />
    <schematictext schX={9} schY={3.6} text="diode" fontSize={0.35} />

    <led name="LED1" color="red" schX={15} schY={5} />
    <schematictext schX={15} schY={3.6} text="led" fontSize={0.35} />

    <fuse name="F1" currentRating="1A" schX={-15} schY={0} />
    <schematictext schX={-15} schY={-1.4} text="fuse" fontSize={0.35} />

    <battery name="BT1" voltage="9V" schX={-9} schY={0} />
    <schematictext schX={-9} schY={-1.4} text="battery" fontSize={0.35} />

    <voltagesource name="VS1" voltage="5V" schX={-3} schY={0} />
    <schematictext
      schX={-3}
      schY={-1.4}
      text="voltage source"
      fontSize={0.35}
    />

    <potentiometer name="RV1" maxResistance="10k" schX={3} schY={0} />
    <schematictext schX={3} schY={-1.4} text="potentiometer" fontSize={0.35} />

    <switch name="SW1" type="spst" schX={9} schY={0} />
    <schematictext schX={9} schY={-1.4} text="switch" fontSize={0.35} />

    <pushbutton
      name="SW2"
      schX={15}
      schY={0}
      pinLabels={{
        pin1: "1",
        pin2: "2",
        pin3: "3",
        pin4: "4",
      }}
    />
    <schematictext schX={15} schY={-1.4} text="pushbutton" fontSize={0.35} />

    <transistor name="Q1" type="npn" schX={-15} schY={-5} />
    <schematictext schX={-15} schY={-6.4} text="npn" fontSize={0.35} />

    <transistor name="Q2" type="pnp" schX={-9} schY={-5} />
    <schematictext schX={-9} schY={-6.4} text="pnp" fontSize={0.35} />

    <mosfet
      name="M1"
      channelType="n"
      mosfetMode="enhancement"
      schX={-3}
      schY={-5}
    />
    <schematictext schX={-3} schY={-6.4} text="n-mosfet" fontSize={0.35} />

    <testpoint name="TP1" schX={3} schY={-5} />
    <schematictext schX={3} schY={-6.4} text="testpoint" fontSize={0.35} />

    <connector
      name="J1"
      schX={9}
      schY={-5}
      pinLabels={{
        pin1: "VBUS",
        pin2: "D-",
        pin3: "D+",
        pin4: "GND",
      }}
    />
    <schematictext schX={9} schY={-6.4} text="connector" fontSize={0.35} />

    <chip
      name="U1"
      schX={15}
      schY={-5}
      pinLabels={{
        pin1: "IN",
        pin2: "GND",
        pin3: "OUT",
        pin4: "VCC",
      }}
    />
    <schematictext schX={15} schY={-6.4} text="chip box" fontSize={0.35} />

    <crystal
      name="Y1"
      frequency="16MHz"
      loadCapacitance="18pF"
      schX={-15}
      schY={-10}
    />
    <schematictext schX={-15} schY={-11.4} text="crystal" fontSize={0.35} />

    <resonator
      name="X1"
      frequency="8MHz"
      loadCapacitance="22pF"
      schX={-9}
      schY={-10}
    />
    <schematictext schX={-9} schY={-11.4} text="resonator" fontSize={0.35} />

    <jumper name="JP1" pinCount={2} schX={-3} schY={-10} />
    <schematictext schX={-3} schY={-11.4} text="jumper" fontSize={0.35} />

    <solderjumper name="SJ1" pinCount={2} schX={3} schY={-10} />
    <schematictext schX={3} schY={-11.4} text="solderjumper" fontSize={0.35} />

    <pinheader name="J2" pinCount={4} schX={9} schY={-10} />
    <schematictext schX={9} schY={-11.4} text="pinheader" fontSize={0.35} />

    <powersource name="PWR1" voltage="3.3V" schX={-15} schY={-15} />
    <schematictext schX={-15} schY={-16.4} text="powersource" fontSize={0.35} />

    <currentsource name="CS1" current="1mA" schX={-9} schY={-15} />
    <schematictext
      schX={-9}
      schY={-16.4}
      text="currentsource"
      fontSize={0.35}
    />

    <opamp name="U2" schX={-3} schY={-15} />
    <schematictext schX={-3} schY={-16.4} text="opamp" fontSize={0.35} />

    <voltageprobe
      name="VP1"
      connectsTo=".VS1 > .pin1"
      referenceTo=".VS1 > .pin2"
      schX={3}
      schY={-15}
    />
    <schematictext
      schX={3}
      schY={-16.4}
      text="voltageprobe"
      fontSize={0.35}
    />
  </board>,
)

export default () => (
  <SchematicViewer
    circuitJson={circuitJson}
    containerStyle={{ height: "100%" }}
    debugGrid
  />
)
