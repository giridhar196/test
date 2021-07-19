it('should call initilizeFormGroup method', () => {
spyOn(component, 'initilizeFormGroup').and.callThrough();
component.ngAfterViewInit();
expect(component.initilizeFormGroup).toHaveBeenCalled();
});
it('should call updateConnection method', () => {
spyOn(component, 'getDataFormForm').and.callThrough();
component.updateConnection();
expect(component.getDataFormForm).toHaveBeenCalled();
});
it('should take an event and set boolean value when necessary', () => {
const changeEvent = { target: { checked: false } };
component.showPassword(changeEvent);
expect(component.showpswd).toBeFalsy();
changeEvent.target.checked = true;
component.showPassword(changeEvent);
expect(component.showpswd).toBeTruthy();
});
it('should check required field for from currency code FOR DATE', () => {
component.formDataSource.patchValue({
dsUserIdInpt:'DMT_OPICS_APP_RW',
dsPasswordInpt:'kssbjdb',
dsHostInpt:'DMT'
})fixture.detectChanges();
component.formDataSource.controls['dsUserIdInpt'].disable();
component.formDataSource.controls['dsPasswordInpt'].disable();
component.formDataSource.controls['dsHostInpt'].disable();
const changeEvent = { target: { value: 'all' } };
component.updateAction(changeEvent);
expect(component.formDataSource.controls['dsUserIdInpt'].enabled).toBeTruthy()
;
expect(component.formDataSource.controls['dsPasswordInpt'].enabled).toBeTruth
y();
expect(component.formDataSource.controls['dsHostInpt'].enabled).toBeTruthy();
changeEvent.target.value = 'userId';
component.updateAction(changeEvent);
expect(component.formDataSource.controls['dsUserIdInpt'].enabled).toBeTruthy()
;
changeEvent.target.value = 'password';
component.updateAction(changeEvent);
expect(component.formDataSource.controls['dsPasswordInpt'].enabled).toBeTruth
y();
changeEvent.target.value = 'host';
component.updateAction(changeEvent);
expect(component.formDataSource.controls['dsHostInpt'].enabled).toBeTruthy();
});
Service Class:-
let service: DataSourceService;
let httpMock:const mockData = {
ENVName: 'DMT',
DATABASE_NANE: 'TBK',
DB_USERID: 'DMT_OPICS_APP_RW',
DB_PASSWORD: 'KRE23',
DB_CS_HOSTDETAILS: 'DESCRIPTION',
CONNECTIONSTRING: 'Data Source=xxxx'
}
const mockUpdateData = {
UserId: 'DMT',
DATABASE_NANE: 'TBK',
DB_USERID: 'DMT_OPICS_APP_RW',
DB_PASSWORD: 'KRE23',
DB_CS_HOSTDETAILS: 'DESCRIPTION',
CONNECTIONSTRING: 'Data Source=xxxx'
}
it('should call getData method', () => {
service.getData().subscribe((result: any) => {
expect(result).toEqual(mockData);
});
const getUrl = `endpoint`;
const req = httpMock.expectOne(getUrl);
expect(req.request.method).toBe('GET');
req.flush({result: mockData});});
it('should call updateDataSource method', () => {
service.saveExtendedNextWaypoint(mockData).subscribe((result:any) => {
expect(result).toEqual(mockUpdateData);
});
const postUrl = `endpoint`;
const req = httpMock.expectOne(postUrl);
expect(req.request.method).toBe('POST');
req.flush({result: mockUpdateData});
}
