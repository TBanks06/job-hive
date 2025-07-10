

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

export const JOB_TYPES = {
    FULL_TIME: 'Full-time',
    PART_TIME: 'Part-time',
    CONTRACT:    'Contract',
    INTERSHIP:  'Intership',
    REMOTE:     'Remote'
}