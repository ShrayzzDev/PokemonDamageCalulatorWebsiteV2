export class DamageInformationsDTO {
    constructor(damagingEvs, damagingIvs, targetEvs, targetIvs, damagingId, damagingLevel, targetId, targetLevel, moveId, isCritical) {
        this.targetIvs = targetIvs;
        this.targetEvs = targetEvs;
        this.damagingIvs = damagingIvs;
        this.damagingEvs = damagingEvs;
        this.damagingId = damagingId;
        this.damagingLevel = damagingLevel;
        this.targetId = targetId;
        this.targetLevel = targetLevel;
        this.moveId = moveId;
        this.isCritical = isCritical;
    }
}