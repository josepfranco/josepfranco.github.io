import {Observable} from 'rxjs';

/**
 * Contract for all data service operations
 */
export interface IDataService<TDto> {
  /**
   * Gets a specific object
   * @param id the identifier of the object
   */
  get(id: string): Observable<TDto>;

  /**
   * Gets all objects
   */
  getAll(): Observable<TDto[]>;
}
