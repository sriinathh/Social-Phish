/**
 * SocialPhish — Shared JavaScript
 * Security-awareness demonstration utilities
 * NO real credentials are collected, stored, or transmitted.
 */

(function() {
    'use strict';

    /* ===================== DEMO EVENT LOGGER ===================== */
    const DemoLogger = {
        events: [],
        maxEvents: 100,

        log(eventType, metadata = {}) {
            const event = {
                type: eventType,
                timestamp: new Date().toISOString(),
                page: document.title || 'Unknown',
                ...metadata
            };
            this.events.push(event);
            if (this.events.length > this.maxEvents) {
                this.events.shift();
            }
            console.log(`[SocialPhish Demo] ${eventType}`, metadata);
        },

        getEvents() {
            return [...this.events];
        },

        clear() {
            this.events = [];
            console.log('[SocialPhish Demo] Events cleared');
        }
    };

    /* ===================== PASSWORD TOGGLE ===================== */
    function initPasswordToggle() {
        document.querySelectorAll('.password-wrapper').forEach(wrapper => {
            const input = wrapper.querySelector('input[type="password"], input[data-type="password"]');
            const toggle = wrapper.querySelector('.password-toggle');
            if (!input || !toggle) return;

            input.addEventListener('input', function() {
                toggle.style.display = this.value.length > 0 ? 'block' : 'none';
            });

            toggle.addEventListener('click', function() {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.textContent = 'Hide';
                    this.setAttribute('aria-label', 'Hide password');
                } else {
                    input.type = 'password';
                    this.textContent = 'Show';
                    this.setAttribute('aria-label', 'Show password');
                }
                input.focus();
            });
        });
    }

    /* ===================== FORM VALIDATION ===================== */
    function initFormValidation() {
        document.querySelectorAll('form[data-demo-form]').forEach(form => {
            const submitBtn = form.querySelector('[type="submit"], .btn-submit');
            const inputs = form.querySelectorAll('input[required]');

            function checkValidity() {
                if (!submitBtn) return;
                const allFilled = Array.from(inputs).every(input => input.value.trim().length > 0);
                submitBtn.disabled = !allFilled;
            }

            inputs.forEach(input => {
                input.addEventListener('input', checkValidity);
            });

            checkValidity();
        });
    }

    /* ===================== DEMO FORM SUBMISSION ===================== */
    function initDemoSubmit() {
        document.querySelectorAll('form[data-demo-form]').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const submitBtn = form.querySelector('[type="submit"], .btn-submit');
                const originalText = submitBtn ? submitBtn.textContent : '';

                // Log demo event (NOT the form contents)
                DemoLogger.log('simulation_started', {
                    brand: form.dataset.brand || 'unknown',
                    fieldCount: form.querySelectorAll('input').length
                });

                // Show loading state
                if (submitBtn) {
                    submitBtn.innerHTML = '<span class="spinner"></span>';
                    submitBtn.disabled = true;
                }

                // Simulate network delay
                setTimeout(() => {
                    DemoLogger.log('simulation_completed', {
                        brand: form.dataset.brand || 'unknown',
                        result: 'demo_success'
                    });

                    // Show success notification
                    const notification = document.querySelector('.notification--success');
                    if (notification) {
                        notification.classList.add('show');
                    }

                    // Reset form
                    if (submitBtn) {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }
                    form.reset();

                    // Hide notification after delay
                    setTimeout(() => {
                        if (notification) {
                            notification.classList.remove('show');
                        }
                    }, 4000);

                    // Reset password toggles
                    form.querySelectorAll('.password-toggle').forEach(t => {
                        t.style.display = 'none';
                    });
                }, 1500);
            });
        });
    }

    /* ===================== KEYBOARD NAVIGATION ===================== */
    function initKeyboardNav() {
        // Enter key on buttons
        document.querySelectorAll('.btn, button').forEach(btn => {
            if (btn.type === 'submit') return;
            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }

    /* ===================== INITIALIZATION ===================== */
    function init() {
        DemoLogger.log('demo_page_opened', {
            url: window.location.pathname,
            userAgent: navigator.userAgent.substring(0, 50) + '...'
        });

        initPasswordToggle();
        initFormValidation();
        initDemoSubmit();
        initKeyboardNav();
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose DemoLogger for console access
    window.SocialPhishDemo = {
        logger: DemoLogger,
        version: '2.0.0'
    };
})();
