import { ROLL_MODES } from "../helpers/rollWindow.js";
import { getCompanion } from "./testData.js";

// Generated by CodiumAI
export function registerOnRollTesting(quench) {
  quench.registerBatch(
    "Codium_ArM5eActorSheet.onRoll",
    (context) => {
      const { describe, it, assert, after, before } = context;
      let actor;
      before(async function () {
        actor = await getCompanion();
      });

      describe("_onRoll", () => {
        // The objective of this test is to verify that when the roll type has the SIMPLE flag, the roll is marked as a simple roll.
        it("should mark the roll as a simple roll when the roll type has the SIMPLE flag", async () => {
          const event = {
            roll: "general"
          };
          const expectedRollMode = ROLL_MODES.SIMPLE;

          const result = await actor.sheet._onRoll(event);

          expect(result).to.be.true;
          expect(actor.system.roll.mode).to.equal(expectedRollMode);
        });

        // The objective of this test is to verify that when the roll type has the NO_BOTCH flag, the roll is marked as a no botch roll.
        it("should mark the roll as a no botch roll when the roll type has the NO_BOTCH flag", async () => {
          const event = {
            roll: ROLL_PROPERTIES.ATTACK.VAL
          };
          const expectedRollMode = ROLL_MODES.NO_BOTCH;

          const result = await actor.sheet._onRoll(event);

          expect(result).to.be.true;
          expect(actor.system.roll.mode).to.equal(expectedRollMode);
        });

        // The objective of this test is to verify that when the roll type has the NO_CONF flag, the roll is marked as a no confidence roll.
        it("should mark the roll as a no confidence roll when the roll type has the NO_CONF flag", async () => {
          const event = {
            roll: "ability"
          };
          const expectedRollMode = ROLL_MODES.NO_CONF;

          const result = await actor.sheet._onRoll(event);

          expect(result).to.be.true;
          expect(actor.system.roll.mode).to.equal(expectedRollMode);
        });

        // Verify that when the roll type has the UNCONSCIOUS flag and the character is unconscious due to fatigue, the function returns true without displaying a notification.
        it("should return true when the roll type has the UNCONSCIOUS flag and the character is unconscious due to fatigue", async () => {
          const event = {
            preventDefault: () => {},
            currentTarget: {
              dataset: {
                roll: "example"
              }
            }
          };
          const actor = {
            system: {
              wounds: {
                dead: [],
                incap: []
              },
              fatigueCurrent: 10,
              fatigueMaxLevel: 10
            }
          };
          const result = await actor.sheet._onRoll(event);
          expect(result).to.be.true;
        });

        // Verify that when the roll type has the PRIVATE flag, the roll template is rendered as a private roll.
        it("should render the roll template as a private roll when the roll type has the PRIVATE flag", async () => {
          const event = {
            preventDefault: () => {},
            currentTarget: {
              dataset: {
                roll: "example"
              }
            }
          };
          const actor = {
            system: {
              wounds: {
                dead: [],
                incap: []
              },
              fatigueCurrent: 0,
              fatigueMaxLevel: 10
            }
          };
          const result = await actor.sheet._onRoll(event);
          expect(result).to.be.true;
        });

        // Verify that when the roll type has the STRESS flag, the roll is marked as a stress roll.
        it("should mark the roll as a stress roll when the roll type has the STRESS flag", async () => {
          const event = {
            preventDefault: () => {},
            currentTarget: {
              dataset: {
                roll: "example"
              }
            }
          };
          const actor = {
            system: {
              wounds: {
                dead: [],
                incap: []
              },
              fatigueCurrent: 0,
              fatigueMaxLevel: 10
            }
          };
          const result = await actor.sheet._onRoll(event);
          expect(result).to.be.true;
        });

        // Tests that the roll is marked as a stress roll when the roll type has the STRESS flag
        it("should mark the roll as a stress roll when the roll type has the STRESS flag", async () => {
          const event = {};
          const dataset = {
            roll: "char"
          };
          const expectedRollData = {
            ...dataset,
            isStress: true
          };

          const result = actor.sheet._onRoll(event);

          expect(result).to.be.true;
          expect(actor.rollData).to.deep.equal(expectedRollData);
        });

        // Tests that the roll is marked as a no botch roll when the roll type has the NO_BOTCH flag
        it("should mark the roll as a no botch roll when the roll type has the NO_BOTCH flag", async () => {
          const event = {};
          const dataset = {
            roll: ROLL_PROPERTIES.ATTACK.VAL
          };
          const expectedRollData = {
            ...dataset,
            isNoBotch: true
          };

          const result = actor.sheet._onRoll(event);

          expect(result).to.be.true;
          expect(actor.rollData).to.deep.equal(expectedRollData);
        });

        // Tests that the roll is marked as a no confidence roll when the roll type has the NO_CONF flag
        it("should mark the roll as a no confidence roll when the roll type has the NO_CONF flag", async () => {
          const event = {};
          const dataset = {
            roll: "aging"
          };
          const expectedRollData = {
            ...dataset,
            isNoConfidence: true
          };

          const result = actor.sheet._onRoll(event);

          expect(result).to.be.true;
          expect(actor.rollData).to.deep.equal(expectedRollData);
        });
      });
    },
    { displayName: "ARS : ArM5eActorSheet._onRoll" }
  );
}
