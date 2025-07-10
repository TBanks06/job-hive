export const ROLES = {

    ADMIN: 'admin',
    EMPLOYER: 'employer',
    APPLICANT: 'applicant'
};

export const PERMISSIONS = {

    [ROLES.ADMIN]: ['create:jobs', 'delete:any_job', 'view:dashboard'],
    [ROLES.EMPLOYER]: ['create:jobs', 'edit:own_jobs','delete:own_jobs'],
    [ROLES.APPLICANT]: ['apply:jobs', 'view:jobs']
};