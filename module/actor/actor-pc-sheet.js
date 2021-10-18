import {
    ArM5eActorSheet
} from "./actor-sheet.js";
/**
 * Extend the basic ArM5eActorSheet 
 * @extends {ArM5eActorSheet}
 */
export class ArM5ePCActorSheet extends ArM5eActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["arm5e", "sheet", "actor"],
            template: "systems/arm5e/templates/actor/actor-pc-sheet.html",
            width: 1100,
            height: 900,
            tabs: [{
                navSelector: ".sheet-tabs",
                contentSelector: ".sheet-body",
                initial: "description"
            }]
        });
    }


    isDropAllowed(type) {
        switch (type) {
            case "weapon":
            case "armor":
            case "spell":
            case "vis":
            case "item":
            case "book":
            case "virtue":
            case "flaw":
            case "ability":
            case "abilityFamiliar":
            case "diaryEntry":
            case "mightFamiliar":
            case "speciality":
            case "distinctive":
            case "sanctumRoom":
            case "magicItem":
            case "personality":
            case "reputation":
            case "magicalEffect":
            case "laboratoryText":
            case "mundaneBook":
                return true;
            default:
                return false;
        }
    }


}