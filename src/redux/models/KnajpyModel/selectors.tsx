import { Map, List } from 'immutable';
import { domain } from 'redux/models/KnajpyModel';
import { Knajpa, KnajpyModelStateFields, KnajpyModelStateInterface } from 'redux/models/KnajpyModel/types';
import { createSelector } from 'reselect';
import { Maybe } from 'types';

export const selectKnajpyDomain = (state) => state.get(domain) as KnajpyModelStateInterface;

export const selectKnajpy = createSelector(
  selectKnajpyDomain,
  (domain) => {
    return domain.get(KnajpyModelStateFields.KNAJPY) as Map<string, Knajpa>
  }
);

// selectKnajpyIds => Id[]
export const selectKnajpyIds = createSelector(
  selectKnajpy,
  (knajpy) => {
    let returnList = List<string>();

    console.log(knajpy);

    for (let index = 1; index <= knajpy.size; index++) {
      const id = knajpy.get(`${index}`)?.id;
      if (id){
        returnList = returnList.push(`${id}`);
      }
    }

    return returnList;
  } 
)
// args: id
export const selectKnajpa = createSelector(
  selectKnajpy,
  (_, args: { id: string }) => args.id,
  (knajpy, id) => {
    return knajpy.get(id) as Knajpa;
  }
)