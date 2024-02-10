import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSliderModule } from '@angular/material/slider';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CharacterSheetComponent } from './components/pages/character-sheet/character-sheet.component';
import { AbilityScoresComponent } from './components/pages/character-sheet/ability-scores/ability-scores.component';
import { SkillsComponent } from './components/pages/character-sheet/skills/skills.component';
import { SkillComponent } from './components/pages/character-sheet/skills/skill/skill.component';
import { SavingThrowsComponent } from './components/pages/character-sheet/saving-throws/saving-throws.component';
import { SavingThrowComponent } from './components/pages/character-sheet/saving-throws/saving-throw/saving-throw.component';
import { LifePointsComponent } from './components/pages/character-sheet/combat-stats/life-points/life-points.component';
import { CombatStatsComponent } from './components/pages/character-sheet/combat-stats/combat-stats.component';
import { AttacksComponent } from './components/pages/character-sheet/attacks/attacks.component';
import { AttackComponent } from './components/pages/character-sheet/attacks/attack/attack.component';
import { SpellcastingComponent } from './components/pages/character-sheet/spellcasting/spellcasting.component';
import { SpellsByLevelComponent } from './components/pages/character-sheet/spellcasting/spells-by-level/spells-by-level.component';
import { AbilityScoreComponent } from './components/pages/character-sheet/ability-scores/ability-score/ability-score.component';
import { AttackOptionsComponent } from './components/pages/character-sheet/attacks/attack-options/attack-options.component';
import { CharacteristicComponent } from './components/pages/character-sheet/characteristics/characteristic/characteristic.component';
import { CharacteristicsComponent } from './components/pages/character-sheet/characteristics/characteristics.component';
import { SensesComponent } from './components/pages/character-sheet/senses/senses.component';
import { SenseComponent } from './components/pages/character-sheet/senses/sense/sense.component';
import { SpecializedSkillsComponent } from './components/pages/character-sheet/specialized-skills/specialized-skills.component';
import { SkillGroupComponent } from './components/pages/character-sheet/skills/skill-group/skill-group.component';
import { SpecializedSkillGroupComponent } from './components/pages/character-sheet/specialized-skills/specialized-skill-group/specialized-skill-group.component';
import { SpecializedSkillComponent } from './components/pages/character-sheet/specialized-skills/specialized-skill-group/specialized-skill/specialized-skill.component';
import { HitDiceComponent } from './components/pages/character-sheet/combat-stats/hit-dice/hit-dice.component';
import { HitDieComponent } from './components/pages/character-sheet/combat-stats/hit-dice/hit-die/hit-die.component';
import { SpellComponent } from './components/pages/character-sheet/spellcasting/spells-by-level/spell/spell.component';
import { ProficiencyBonusComponent } from './components/pages/character-sheet/proficiency-bonus/proficiency-bonus.component';
import { InspirationComponent } from './components/pages/character-sheet/inspiration/inspiration.component';
import { InformationsComponent } from './components/pages/character-sheet/informations/informations.component';
import { DeathSavesComponent } from './components/pages/character-sheet/combat-stats/death-saves/death-saves.component';
import { CharacterSheetHeaderComponent } from './components/pages/character-sheet/character-sheet-header/character-sheet-header.component';
import { InventoryComponent } from './components/pages/character-sheet/inventory/inventory.component';
import { WieldedItemsComponent } from './components/pages/character-sheet/wielded-items/wielded-items.component';
import { WieldedItemComponent } from './components/pages/character-sheet/wielded-items/wielded-item/wielded-item.component';
import { ArmorClassComponent } from './components/pages/character-sheet/combat-stats/armor-class/armor-class.component';
import { SpeedComponent } from './components/pages/character-sheet/combat-stats/speed/speed.component';
import { InitiativeComponent } from './components/pages/character-sheet/combat-stats/initiative/initiative.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    CharacterSheetComponent,
    AbilityScoresComponent,
    SkillsComponent,
    SkillComponent,
    SavingThrowsComponent,
    SavingThrowComponent,
    LifePointsComponent,
    CombatStatsComponent,
    AttacksComponent,
    AttackComponent,
    SpellcastingComponent,
    SpellsByLevelComponent,
    AbilityScoreComponent,
    AttackOptionsComponent,
    CharacteristicComponent,
    CharacteristicsComponent,
    SensesComponent,
    SenseComponent,
    SpecializedSkillsComponent,
    SkillGroupComponent,
    SpecializedSkillGroupComponent,
    SpecializedSkillComponent,
    HitDiceComponent,
    HitDieComponent,
    SpellComponent,
    ProficiencyBonusComponent,
    InspirationComponent,
    InformationsComponent,
    DeathSavesComponent,
    CharacterSheetHeaderComponent,
    InventoryComponent,
    WieldedItemsComponent,
    WieldedItemComponent,
    ArmorClassComponent,
    SpeedComponent,
    InitiativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    TextFieldModule,
    MatSliderModule,
    CdkDropList,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
