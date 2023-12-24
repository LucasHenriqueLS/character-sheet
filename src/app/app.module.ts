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
import {MatSliderModule} from '@angular/material/slider';

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
import { ConjurationsComponent } from './components/pages/character-sheet/conjurations/conjurations.component';
import { SpellsByLevelComponent } from './components/pages/character-sheet/conjurations/spells-by-level/spells-by-level.component';
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
    ConjurationsComponent,
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
    HitDiceComponent
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
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
