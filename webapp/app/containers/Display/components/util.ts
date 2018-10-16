/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import * as slide from 'assets/json/slideSettings/slide.json'
import * as chart from 'assets/json/slideSettings/chart.json'
import * as rectangle from 'assets/json/slideSettings/rectangle.json'
import * as label from 'assets/json/slideSettings/label.json'

export enum SecondaryGraphTypes {
  Rectangle = 20,
  Label = 21
}

export enum GraphTypes {
  Slide,
  Chart,
  Secondary
}

export enum OrderDirection {
  Asc,
  Desc
}

export const slideSettings = {
  [GraphTypes.Slide]: slide,
  [GraphTypes.Chart]: chart,
  [SecondaryGraphTypes.Rectangle]: rectangle,
  [SecondaryGraphTypes.Label]: label
}

export function getDefaultSlideParams () {
  const params = (slide as any).params
  const defaultSlideParams = {}
  params.forEach((param) => {
    param.items.forEach((item) => {
      defaultSlideParams[item.name] = item.default || null
    })
  })
  return defaultSlideParams
}